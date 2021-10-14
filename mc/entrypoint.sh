#!/bin/bash
set -ex
sleep 5s
export MC_HOST_s3=http://minioadmin:minioadmin@s3:9000
mc admin info s3
mc mb s3/grafana || true
mc anonymous set download s3/grafana
mc watch s3/grafana