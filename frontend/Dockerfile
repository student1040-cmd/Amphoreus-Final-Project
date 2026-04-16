FROM node:18
WORKDIR /app
COPY package*.json ./
# Встановлюємо все чисто з нуля
RUN npm install
COPY . .
ENV HOST=0.0.0.0
ENV PORT=5173
EXPOSE 5173
# Запускаємо через npx, щоб точно знайти vite
CMD ["npx", "vite", "--host", "0.0.0.0"]
