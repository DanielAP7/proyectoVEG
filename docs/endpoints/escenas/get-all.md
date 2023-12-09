# Endpoint: `GET /Escenas`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /escenas
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_escena": 1,
        "titulo": "La universidad",
        "contenido": "La universidad donde estudia Alex",
    },
    {
        "id_escena": 2,
        "titulo": "La casa",
        "contenido": "La casa donde vive Alex",
    },
    {
        "id_escena": 3,
        "titulo": "El cementerio",
        "contenido": "El cementerio donde esta enterrada Julia",
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