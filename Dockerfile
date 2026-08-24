# Atlas container lab image
FROM node:99-alpine

WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json ./
RUN npm install

# Copy application source
COPY . .

# Document the port the container listens on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
