# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

### personajes
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /personajes/{id}`](./personajes/get-id.md)          | Obtiene información detallada sobre un personajes en especifico. |
| [`GET /personajes`](./personajes/get-all.md)   | Recupera la lista de todos los personajes disponibles. |
| [`POST /personajes`](./personajes/post.md)     | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /personajes/{id}`](./personajes/patch.md)    | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |

### Decisiones
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /decisiones/{id}`](./decisiones/get-id.md) | Obtiene la información especifica de una decision. |
| [`GET /decisiones`](./decisiones/get-all.md) | Recupera la lista de todas las decisiones que han respondido. |
| [`POST /decisiones`](./decisiones/post.md)   | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /decisiones/{id}`](./decisiones/patch.md)    | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |

### Escenas
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /escena/{id}`](./escena/get-id.md)   | Obtiene la información de una escena especificada. |
| [`GET /escena`](./escena/get-all.md)   | Recupera la lista de todas las escena del juego. |
| [`POST /escena`](./escena/post.md)    | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /escena/{id}`](./escena/patch.md)     | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |

### Progreso_jugador
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /pro_jug/{id}`](./pro_jug/get-id.md)   | Obtiene la información del progeso de un jugador especifico del juego. |
| [`GET /pro_jug`](./pro_jug/get-all.md)   | Obtiene la información de todo el progreso de un jugador del videojuego. |
| [`POST /pro_jug`](./pro_jug/post.md)     | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /pro_jug/{id}`](./pro_jug/patch.md)     | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |
