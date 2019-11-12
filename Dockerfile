FROM    nginx:stable-alpine
COPY    ./   /build/
RUN     set -xe;\
        cd /build;\
        starconf_set_entry remote http://config.stuhome.com/$ENV/kase/config.json;\
        starconf_configure_root add .;\
        sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories;\
        apk update;\
        apk add nodejs npm;\
        npm install --registry=https://registry.npm.taobao.org;\
        npm run build;\
        apk del nodejs npm;\
        cp -r dist/* /usr/share/nginx/html/
