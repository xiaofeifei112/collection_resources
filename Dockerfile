FROM node:20.11-alpine3.18 as builder
WORKDIR /opt/web
COPY . .
WORKDIR /opt/web
RUN yarn config set registry https://registry.npmmirror.com && \
 yarn install --ignore-optional && yarn build

#FROM nginx:1.17
FROM a48d4f95ac74

RUN addgroup appgroup --gid 1000 \
	 && useradd appuser --uid 1000 --shell /bin/bash --group appgroup \
	 && chmod -R 777 /etc/nginx /var/ /var/cache/nginx /var/run

USER 1000
COPY --from=builder --chown=appuser:appgroup /opt/web/dist /code
COPY --chown=appuser:appgroup nginx.conf /etc/nginx/nginx.conf
EXPOSE 8000

CMD ["nginx"]
