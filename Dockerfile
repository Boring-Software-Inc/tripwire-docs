FROM oven/bun:1.2.20-alpine AS bun

FROM node:24.6.0-alpine AS build
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY blume.config.ts theme.css ./
COPY docs ./docs
COPY public ./public
RUN npm run validate && npm run build

FROM caddy:2.10-alpine
COPY --from=build /app/dist /srv
EXPOSE 8080
ENTRYPOINT ["caddy", "file-server", "--listen", ":8080", "--root", "/srv"]
