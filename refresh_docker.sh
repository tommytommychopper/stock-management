#!/bin/sh
#
# refresh_docker.sh <docker_image> <gcp_ip>
#

image=${1}
ip=${2}
sudo docker build -t ${image} .
sudo docker push ${image}
scp refresh_docker_remote.sh ${ip}:
ssh itsuki@${ip} "/bin/sh refresh_docker_remote.sh ${image}"
