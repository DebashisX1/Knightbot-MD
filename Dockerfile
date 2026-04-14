FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with legacy peer deps
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Create temp directory
RUN mkdir -p temp

# Expose port (Railway will set PORT)
EXPOSE 3000

# Start the bot
CMD ["npm", "start"]
