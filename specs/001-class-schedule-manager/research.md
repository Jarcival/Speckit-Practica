# Research: Class Schedule Manager

## Decision: Usar HTML/CSS/Vanilla JS con Bootstrap (CDN)
**Rationale:** El requerimiento explícito es construir la aplicación con HTML, CSS y JavaScript puro. Bootstrap por CDN permite una UI presentable sin introducir compilación, npm, ni dependencias pesadas. Esto mantiene el código simple y adecuado para un proyecto educativo.

**Alternativas consideradas:**
- **Frameworks (React/Vue/Svelte)**: demasiado complejos para el alcance y contradicen la meta de simplicidad educativa.
- **Librerías CSS (Tailwind, Bulma)**: requieren config/compilación o tienen curva extra; Bootstrap via CDN es suficiente.

## Decision: Persistencia en `localStorage`
**Rationale:** Permite guardar el horario entre recargas sin servidor. Es sencillo de usar (`JSON.stringify`/`JSON.parse`) y cumple con el alcance de una demo universitaria.

**Alternativas consideradas:**
- `IndexedDB`: más complejo para un demo simple.
- Backend (API/DB): fuera del alcance; el requerimiento pide almacenamiento en navegador.

## Decision: Estructura de datos (modelo de clase)
**Rationale:** Un arreglo de objetos simplifica manipulación y renderizado de la lista. Cada clase se representa con campos mínimos (nombre, día, hora) tal como pide la especificación.

**Modelo propuesto:**
```js
{
  id: string,          // UUID generado en el cliente para operaciones de borrado
  nombre: string,      // "Matemáticas"
  dia: string,         // "Lunes"
  hora: string         // "10:00-11:00"
}
```

## Decision: UI / UX básico
**Rationale:** La app tendrá un formulario para agregar clases y una tabla/lista para mostrar y borrar entradas. El componente de lista se renderiza dinámicamente desde el estado en memoria y `localStorage`.

**Alternativas consideradas:**
- Vista con calendario: demasiado complejo para MVP.
- Drag & drop para reordenar: no necesario para los requisitos actuales.
