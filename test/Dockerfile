# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the app's source code to the working directory
COPY . .

# Expose port 3000 (same port as the Node.js app)
EXPOSE 3000

# Start the Node.js app
CMD ["node", "index.js"]
