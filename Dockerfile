# syntax=docker/dockerfile:1
FROM synthetixio/docker-e2e:20.0-ubuntu as base
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

RUN mkdir /app
RUN echo 
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

FROM base as test
RUN yarn --frozen-lockfile --prefer-offline --no-audit
COPY . .
