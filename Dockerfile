FROM node:16 AS builder

WORKDIR /home/root/api

# Copy package.json and yarn.lock to container
COPY package.json yarn.lock ./

RUN npm config set unsafe-perm true

# set user root
USER root

# Install dependencies
RUN yarn

COPY --chown=root:root . .

RUN yarn build

# Second stage
FROM node:16-alpine

WORKDIR /home/root/api

COPY package.json yarn.lock ./

USER root

# Install only production dependencies
RUN yarn install --production

# Copy dist folder to container
COPY --from=builder /home/root/api/dist ./dist

COPY --chown=root:root .env .
COPY --chown=root:root ormconfig.json .

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

CMD [ "yarn", "start" ]
