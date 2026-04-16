FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Додаємо права на виконання для vite
RUN chmod +x node_modules/.bin/vite
ENV HOST=0.0.0.0
ENV PORT=5173
EXPOSE 5173
CMD ["./node_modules/.bin/vite", "--host", "0.0.0.0"]
