# building the app
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:alpine

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

#Replace default Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]