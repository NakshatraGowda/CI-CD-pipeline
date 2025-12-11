# Multi-stage Dockerfile for Next.js production
# Build stage
FROM node:20-slim AS builder
WORKDIR /app

# Install dependencies (copy package files first for better caching)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary artifacts from build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "run", "start"]