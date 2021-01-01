ARG NODE_VERSION=12.x

FROM gcr.io/connectedcars-staging/node-builder.master:$NODE_VERSION as builder

ARG COMMIT_SHA=master
ENV COMMIT_SHA=$COMMIT_SHA

WORKDIR /app

USER root

RUN apt-get update && apt-get install -y mysql-server

USER builder

# Copy application code.
COPY --chown=builder:builder package.json package-lock.json /app/

RUN npm install

COPY --chown=builder:builder . /app/

RUN npm run build

# Run ci checks
RUN npm run ci-tsc

RUN npm run ci-audit

RUN npm run ci-jest

RUN npm run ci-eslint