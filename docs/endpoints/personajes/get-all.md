# Endpoint: `GET /Personajes`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /personajes
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_personaje": 1,
        "nombre": "Alex",
        "descripcion": "Protagonista del videojuego",
        "imagen": "Joven de 24 años, mexicano",
    },
    {
        "id_personaje": 2,
        "nombre": "Julia",
        "descripcion": "Novia difunta del protagonista",
        "imagen": "una joven de 20 años, mexicana",
    },
    {
        "id_personaje": 3,
        "nombre": "Ramses",
        "descripcion": "Hermano del protagonista",
        "imagen": "Joven de 29 años, mexicano",
    }
]
```

## Respuestas de Errores Posibles
- Código 400 Not Found:

    ```
    No se puede OBTENER /tabla
    ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir el nombre correcto de la tabla en la solicitud para obtener la información solicitada.