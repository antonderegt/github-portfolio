# build stage
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
#RUN npm install --production
RUN npm install --development
COPY . .
RUN npm run build

# production stage
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# copy nginx config
RUN rm /etc/nginx/conf.d/*
COPY proxy.conf /etc/nginx/conf.d/
