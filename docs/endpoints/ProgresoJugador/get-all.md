# Endpoint: `GET /ProgresoJugador`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /ProgresoJugador
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_progreso": 1,
        "fk_id_usuario": 1,
        "fk_id_escena": 1,
    },
    {
        "id_progreso": 2,
        "fk_id_usuario": 2,
        "fk_id_escena": 2,
    },
    {
        "id_progreso": 3,
        "fk_id_usuario": 3,
        "fk_id_escena": 3,
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