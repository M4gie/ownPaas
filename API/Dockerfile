FROM node:12.16.3-alpine as builder
RUN apk add git --no-cache
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --pure-lockfile --non-interactive
COPY . .
RUN node ace build --production
WORKDIR /app/build
RUN yarn install --production

FROM node:12.16.3-alpine
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 3333
CMD ["node", "server.js"]
