Guía para la creación de este repositorio
=========================================

Crear un directorio para contener el proyecto llamado `node-rest`.

Inicializar el repositorio de Git:

```sh
git init
```

Crear un archivo `/.gitignore` y colocar lo siguiente:

```
# Ignorear dependencias de Node.js
/node_modules
```

Crear un archivo `/Dockerfile` y colocar lo siguiente:

```
# Utilizar imagen base de Node.js
FROM node:lts-slim

# Crear y cambiar el directorio actual a /app
WORKDIR /app/

# Copiar el contenido del proyecto actual a /app
COPY . /app/

# Exponer puerto 80
EXPOSE 80
```

Crear un archivo `/.dockerignore` y colocar lo siguiente:

```
# Excluir directorio de dependencias de Node.js
node_modules
```

Crear un archivo `/docker-compose.yml` y colocar lo siguiente:

```yml
version: '3'
services:
    web-service:
        build: .
        volumes:
            - .:/app
            - /app/node_modules
        ports:
            - 3100:80
```

Abrir una terminal y ejecutar lo siguiente:

```sh
docker-compose up -d
```

Una vez que estén iniciados los servicios, ejecutar lo siguiente:

```sh
docker exec -it node-rest-web-service-1 sh
```

> **NOTA**  
> El nombre del contenedor (`node-rest-web-service-1`) puede cambiar dependiendo
> del nombre que se le haya asignado al directorio del proyecto.

Una vez accediendo a la terminal ejecutar lo siguiente, que creará el archivo
package.json del proyecto:

```sh
npm init
```

Una vez creado el `/package.json` en el directorio del proyecto, proceder con la
instalación de los siguientes módulos:

```sh
npm install express body-parser mysql2 knex
```

```sh
npm install -D nodemon 
```

Una vez instalados los paquetes, deberán aparecer el archivo
`/package-lock.json` y el directorio `/node_modules` en el proyecto.

Modificar el archivo `/package.json` para incluir las siguiente instrucciones en
scripts:

```json
"scripts": {
    "start": "node ./src/app.js",
    "debug": "nodemon ./src/app.js -L"
}
```

Crear un archivo `/src/app.js` y colocar lo siguiente:

```js
const express = require('express');
const app = express();
const port = 80;

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola Mundo');
});

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});
```

Modificar el archivo `Dockerfile` para que quede de la siguiente manera:

```
# Utilizar imagen base de Node.js
FROM node:lts-slim

# Crear y cambiar el directorio actual a /app
WORKDIR /app/

# Copiar archivo de dependencias.
COPY ./package*.json /app/

# Copiar el contenido del proyecto actual a /app
COPY . /app/

# Exponer puerto 80
EXPOSE 80

# Iniciar aplicación
CMD ["npm", "start"]
```

Modificar el archivo `docker-compose.yml` para que quede de la siguiente manera:

```yml
version: '3'
services:
    web-service:
        build: .
        volumes:
            - .:/app
            - /app/node_modules
        ports:
            - 3100:80
        command: ["npm", "run", "debug"]
```