# Usa una imagen base de Node.js
FROM node:21-alpine3.20

# Establece el directorio de trabajo en /app dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json desde la raíz del monorepo
COPY package*.json ./

# Copia los archivos tsconfig desde la raíz del monorepo
COPY tsconfig*.json ./

# Copia el módulo de configuración (config/)
COPY config/ config/

# Instala las dependencias necesarias
RUN npm install

# Copia el módulo de configuración (config/)
COPY ./apps/api-gateway .

EXPOSE 3000