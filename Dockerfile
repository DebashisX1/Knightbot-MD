FROM node:18-bullseye-slim

WORKDIR /app

# Install build dependencies for native modules
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    libvips-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

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
