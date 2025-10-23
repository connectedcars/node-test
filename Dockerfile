ARG NODE_VERSION=stable

FROM europe-west1-docker.pkg.dev/connectedcars-build/node-builder/master:$NODE_VERSION as builder

ARG COMMIT_SHA=master
ENV COMMIT_SHA=$COMMIT_SHA

WORKDIR /app

USER builder

# Copy application code.
COPY --chown=builder:builder package.json package-lock.json /app/

RUN npm install

COPY --chown=builder:builder . /app/

RUN npm run build

# Run ci checks
RUN npm run ci-tsc
RUN npm run ci-jest
RUN npm run ci-audit
RUN npm run ci-eslint
