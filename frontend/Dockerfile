FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
# Встановлюємо абсолютно все, включаючи devDependencies
RUN npm install --include=dev
COPY . .
ENV HOST=0.0.0.0
ENV PORT=5173
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
