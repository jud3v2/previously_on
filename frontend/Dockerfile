# Use an official node runtime as a parent image
FROM node:20-alpine

# Expose port 4173
EXPOSE 3000

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

RUN npm install -g pnpm
# Install the dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN pnpm run build

RUN npm install -g serve

# Set the command to run the server
CMD ["serve", "-s", "dist"]