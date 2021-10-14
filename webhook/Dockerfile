FROM node:14-slim
ENV PORT=3000
WORKDIR /app
COPY package.json package.json
RUN npm install --registry=https://registry.npm.taobao.org
COPY . .
EXPOSE 3000
CMD ["node","server.js"]