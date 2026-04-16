FROM node:18-alpine
WORKDIR /app
# Ми вже всередині папки frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Використовуємо просту команду для запуску в Docker
CMD ["npm", "run", "dev", "--", "--host"]
