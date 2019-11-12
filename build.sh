#!/usr/bin/env bash
set -e
sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
apk add git
ENV=$CI_COMMIT_REF_NAME
if [ $ENV = "master" ]
then
    ENV="production"
    CONFIG=$PRODUCTION_CONFIG
else
    if [ "$ENV" = "staging" ]
    then
        ENV="staging"
        CONFIG=$STAGING_CONFIG
    else
        exit 1
    fi
fi
echo $ENV
echo $CONFIG > src/config.js
docker build -t $DOCKER_BUILD_TAG --build-arg "ENV=$ENV" .
