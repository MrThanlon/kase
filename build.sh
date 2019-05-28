apk install nodejs
npm install --registry=https://registry.npm.taobao.org
npm run build
docker build -t $DOCKER_BUILD_TAG .
