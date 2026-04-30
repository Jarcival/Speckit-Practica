# UI Contract: Class Schedule Manager

Este contrato define las expectativas mínimas de la interfaz de usuario y las interacciones para la aplicación de horario.

## Componentes de UI

### 1) Formulario de Agregar Clase
- Debe existir un formulario con campos:
  - `input` para Nombre (id: `class-name`)
  - `input` para Día (id: `class-day`)
  - `input` para Hora (id: `class-time`)
  - `button` para enviar/agregar (id: `add-class-btn`)

- Al enviar el formulario:
  - Se debe validar que los tres campos no estén vacíos.
  - Si la validación falla, se muestra un mensaje de error en pantalla.
  - Si pasa, se crea una nueva clase y se actualiza la lista.

### 2) Lista de Clases
- Debe existir un contenedor para la lista de clases (id: `classes-list`).
- Cada clase se renderiza con:
  - Nombre, día y hora.
  - Un botón de borrar (por ejemplo, con clase `delete-class-btn`) que elimina esa clase.

### 3) Persistencia
- La lista de clases se guarda en `localStorage` bajo la clave `scheduleClasses`.
- Al cargar la página, la lista se inicializa desde `localStorage` (si existe).

## Contrato de Datos (JavaScript)

### API interna (módulos/fns) esperada

#### `loadClasses(): Clase[]`
- Devuelve un arreglo de clases cargadas de `localStorage`.

#### `saveClasses(classes: Clase[]): void`
- Serializa y guarda el arreglo de clases en `localStorage`.

#### `addClass(clase: Clase): void`
- Valida y agrega la clase a la lista persistente.

#### `removeClass(id: string): void`
- Elimina la clase con el `id` dado y actualiza la persistencia.

> Nota: Estas funciones son parte del contrato interno. La implementación puede estar en un solo archivo (`app.js`) si se desea simplicidad.
