#!/bin/bash
set -ex
sleep 5s
mc admin info s3
mc mb s3/grafana || true
mc anonymous set download s3/grafana
mc watch s3/grafana