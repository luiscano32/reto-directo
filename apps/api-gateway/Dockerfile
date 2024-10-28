# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en /app dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json desde la raíz del monorepo
COPY package*.json ./

# Copia los archivos tsconfig desde la raíz del monorepo
COPY tsconfig*.json ./

# Instala las dependencias necesarias
RUN npm install --legacy-peer-deps

# Copia el módulo de configuración (config/)
COPY config/ config/

# Copia el código del microservicio desde su directorio
COPY apps/api-gateway/ .

# Construye el proyecto
RUN npm run build

# Verifica el contenido de la carpeta dist
RUN ls -l dist/apps/api-gateway || echo "Build failed or files missing"

# Comando por defecto para ejecutar el microservicio
CMD ["node", "dist/apps/api-gateway/main"]
