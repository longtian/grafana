FROM node:14-slim

WORKDIR /app
COPY package.json package.json
RUN npm install --registry=https://registry.npm.taobao.org

COPY . .

ENV PORT=3000
EXPOSE 3000
CMD ["node","server.js"]