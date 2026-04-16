FROM node:18-alpine
WORKDIR /app
# Копіюємо лише файли залежностей
COPY package*.json ./
# Встановлюємо всі бібліотеки
RUN npm install
# Копіюємо решту файлів фронтенду
COPY . .
# Відкриваємо порт
EXPOSE 5173
# Запускаємо сервер розробки, який Vite дозволить відобразити зовні
CMD ["npm", "run", "dev", "--", "--host"]
