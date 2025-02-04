# Base image
FROM node:18

# Set working directory inside the container
WORKDIR /war/www

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code (including server.js and other files at the root)
COPY . .

# Expose the application port
EXPOSE 8888 3306 25

# Command to run the application
CMD ["npm", "start"]
