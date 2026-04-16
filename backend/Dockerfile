FROM node:18-alpine
WORKDIR /app
# Ми вже всередині папки backend, тому шлях просто ./
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=3000
EXPOSE 3000
CMD ["node", "index.js"]
