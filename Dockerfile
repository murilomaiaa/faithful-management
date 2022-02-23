FROM node:16-alpine

WORKDIR /home/root/api

# Copy package.json and yarn.lock to container
COPY package.json yarn.lock ./

# set user root
USER root

# Install dependencies
RUN yarn

COPY --chown=root:root . .

RUN yarn build

EXPOSE 3333

CMD [ "yarn", "start" ]
