# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy application source code
COPY . .

# Expose the application's port
EXPOSE 5555

# Use environment variables (Kubernetes ConfigMap & Secrets)
CMD ["sh", "-c", "node server.js"]
