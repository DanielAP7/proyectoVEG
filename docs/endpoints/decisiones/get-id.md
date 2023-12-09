# Endpoint: `GET /personajes/{id}`

Permite obtener un registro especifico, al incluir su identificador único.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla.
- `{id}` (obligatorio): Identificador único del registro que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /decisiones/3
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_decision": 1,
    "texto": "No hablaste con Ramses",
    "consecuencias": "Esta accion tendra consecuencias",
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

    ```json
    {
        "error": "Not found"
    }
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información solicitada.