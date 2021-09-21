ARG NODE_VERSION=14.x

FROM gcr.io/connectedcars-staging/node-builder.master:$NODE_VERSION as builder

ARG COMMIT_SHA=master
ENV COMMIT_SHA=$COMMIT_SHA

WORKDIR /app

USER root

# Install deps for mysqld and both mysqld 5.7 and mysqld 8.0
RUN apt-get update \
 && apt-get install libaio1 libnuma1 libwrap0 libevent-core-2.1-7 libevent-pthreads-2.1-7 libmecab2 mysql-client-core-8.0 \
 && apt-get download mysql-server-core-5.7 mysql-server-core-8.0
RUN dpkg-deb -xv mysql-server-core-5.7_*.deb mysql-5.7
RUN dpkg-deb -xv mysql-server-core-8.0_*.deb mysql-8.0

USER builder

# Copy application code.
COPY --chown=builder:builder package.json package-lock.json /app/

RUN npm install

COPY --chown=builder:builder . /app/

RUN npm run build

ENV MYSQLD=/app/mysql-8.0/usr/sbin/mysqld
ENV MYSQLD_57=/app/mysql-5.7/usr/sbin/mysqld
ENV MYSQLD_80=/app/mysql-8.0/usr/sbin/mysqld

# Run ci checks
RUN npm run ci-auto