#Creates a layer from node:alpine image.
FROM node:14-alpine

ENV YARN_VERSION 1.22.1

RUN yarn policies set-version $YARN_VERSION

#install git
RUN apk add --no-cache libc6-compat

#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /usr/src/app

#Copy new files or directories into the filesystem of the container
COPY --chown=node package.json /usr/src/app
COPY --chown=node yarn.lock /user/src/app

RUN yarn install --frozen-lockfile

COPY --chown=node . /usr/src/app

#useless ass instruction
EXPOSE 3000

ENV NODE_ENV production

#build the stuff
RUN yarn build

#owner to node so he has access to the .next folder and is able to create and cache files
RUN chown -R node .next

CMD ["yarn", "start"]

#default user to non root
USER node



# Install dependencies only when needed
# FROM node:alpine AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile

# # Rebuild the source code only when needed
# FROM node:alpine AS builder
# WORKDIR /app
# COPY . .
# COPY --from=deps /app/node_modules ./node_modules
# RUN yarn build && yarn install --production 

# # Production image, copy all the files and run next
# FROM node:alpine AS runner
# WORKDIR /app

# ENV NODE_ENV production

# # RUN addgroup -g 1001 -S nodejs
# # RUN adduser -S nextjs -u 1001

# # You only need to copy next.config.js if you are NOT using the default configuration
# # COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# EXPOSE 3000

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

# CMD ["yarn", "start"]