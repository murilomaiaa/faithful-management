FROM node:16

# Create the folder structure
# RUN mkdir -p /home/root/api/node_modules && \
    # chown -R root:root /home/root/api

WORKDIR /home/root/api

# Copy package.json and yarn.lock to container
COPY package.json yarn.lock ./

# set user root
USER root

# RUN yarn global add typescript ts-node
# Install dependencies
RUN yarn

COPY --chown=root:root . .

RUN yarn build

EXPOSE 3333

ENTRYPOINT [ "yarn", "start" ]
