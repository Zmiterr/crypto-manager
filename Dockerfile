# syntax=docker/dockerfile:1
FROM synthetixio/docker-e2e:18.16-ubuntu as base

RUN mkdir /app
RUN echo 
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

FROM base as test
RUN yarn --frozen-lockfile --prefer-offline --no-audit
COPY . .
