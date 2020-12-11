#!/bin/sh
image=${1}
# Pull latest Docker image
docker pull ${image}
# Stop running container
docker stop `docker ps -l -q`
# Start container
docker run -d -p 80:8000 ${image}