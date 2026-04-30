# Data Model: Class Schedule Manager

## Entidades

### Clase
Representa una clase/materia en el horario del estudiante.

- **id** (string, obligatorio): Identificador único generado en el cliente (por ejemplo, UUID corto) para poder borrar entradas de forma confiable.
- **nombre** (string, obligatorio): Nombre de la clase, e.g., "Matemáticas".
- **dia** (string, obligatorio): Día de la semana, e.g., "Lunes".
- **hora** (string, obligatorio): Intervalo horario, e.g., "10:00-11:00".

## Validaciones

- `nombre`, `dia` y `hora` deben ser cadenas no vacías.
- `id` debe ser único dentro del conjunto de clases.

## Estado y Transiciones

- **Estado inicial**: Lista de clases vacía (`[]`) o cargada desde `localStorage`.
- **Agregar clase**: Transición desde lista `L` a `L + [nuevaClase]`.
- **Borrar clase**: Transición desde lista `L` a `L  [clase]` (con clase filtrada por `id`).

## Persistencia

- Clases se serializan a JSON y se guardan bajo la clave `"scheduleClasses"` en `localStorage`.
- Al iniciar la aplicación, se carga el valor de `localStorage` y se parsea a la estructura de datos.
