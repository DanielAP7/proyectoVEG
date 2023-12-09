# Endpoint: `GET /Decisiones`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /Decisiones
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_decision": 1,
        "texto": "No hablaste con Ramses",
        "consecuencias": "Esta accion tendra consecuencias",
    },
    {
        "id_decision": 2,
        "texto": "No hiciste tu tarea",
        "consecuencias": "Esta accion tendra consecuencias",
    },
    {
        "id_decision": 3,
        "texto": "Regaste las plantas",
        "consecuencias": "Esta accion tendra consecuencias",
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