FROM node:18-alpine
WORKDIR /app
# Копіюємо файли залежностей
COPY package*.json ./
# Встановлюємо бібліотеки
RUN npm install
# Копіюємо весь код
COPY . .
# Важливо: Vite має слухати всі інтерфейси через 0.0.0.0
ENV VITE_HOST=0.0.0.0
ENV HOST=0.0.0.0
EXPOSE 5173
# Запускаємо з примусовим хостом 0.0.0.0
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
