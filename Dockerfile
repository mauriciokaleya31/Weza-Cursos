# Stage 1: Build
FROM node:20 AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies with legacy-peer-deps to avoid conflicts with React 19
RUN npm ci --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
