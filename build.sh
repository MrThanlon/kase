#!/usr/bin/env bash
envsubst < src/config.sample.js > src/config.js
sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
apk update
apk add nodejs npm
node --version
npm --version
tree
npm install --registry=https://registry.npm.taobao.org
npm run build
docker build -t $DOCKER_BUILD_TAG .
