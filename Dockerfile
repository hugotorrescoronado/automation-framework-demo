FROM mcr.microsoft.com/playwright:v1.64.0-jammy

WORKDIR /app

COPY . .

RUN npm install

CMD ["npx", "playwright", "test"]