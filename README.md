# Grafana Demo

Complete stack to demo how grafana attach an alert image to webhook notification.

### services

- grafana
- grafana-renderer
- postgres
- prometheus
- alertmanager
- minio(s3)
- mc(s3 tools)
- webhook

### result

expect `imageUrl` in webhook notifications

```bash
docker-compose logs -f webhook
```

```
{
  title: '[Alerting] grafana alerts alert',
  ruleId: 1,
  ruleName: 'grafana alerts alert',
  state: 'alerting',
  evalMatches: [
    {
      value: 1,
      metric: 'grafana_alerting_active_alerts{instance="grafana:3000", job="grafana"}',
      tags: [Object]
    }
  ],
  orgId: 1,
  dashboardId: 1,
  panelId: 5,
  tags: {},
  ruleUrl: 'http://localhost:3000/d/BeEFMkOnz/overview?tab=alert&viewPanel=5&orgId=1',
  imageUrl: 'http://s3:9000/grafana/LQFw3BOJF2WsPURU1XzD.png'
}
```

### behind the scenes

1. grafana alert triggered
2. grafana call renderer to render an image using embed chromium
3. renderer visit grafana url to generate an image
4. image is uploaded to s3 bucket by grafana 
5. image url is included in notification payload
6. notification sent to webhook address

### cheatsheets

**reload prometheus configuration**

```
curl -X POST http://127.0.0.1:9090/-/reload
```

**get a mc shell**

```
 docker-compose run --rm --entrypoint /bin/bash mc
```