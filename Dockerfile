FROM    nginx:stable-alpine
COPY    .   /root/
RUN     sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories \
        && apk update \
        && apk add nodejs npm \
        && cd /root/ \
        && npm install --registry=https://registry.npm.taobao.org \
        && npm run build \
        && cp -R /root/dist/* /usr/share/nginx/html/ \
        && rm -rf *
