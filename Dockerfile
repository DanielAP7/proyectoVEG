# Utilizar imagen base de Node.js
FROM node:lts-slim

# Crear y cambiar el directorio actual a /app
WORKDIR /app

# Copiar archivo de dependencias
COPY ./package*.json /app/

# Instalar las dependencias
RUN npm install

# Copiamos el contenido del proyecto a /app
COPY . /app/

# Exponer puerto 80
EXPOSE 80

# Iniciar aplicación
CMD ["npm", "start"]
