---
description: "Tareas para la implementación de Class Schedule Manager"
---

# Tasks: Class Schedule Manager

**Feature**: `001-class-schedule-manager`  
**Input**: `specs/001-class-schedule-manager/spec.md`, `specs/001-class-schedule-manager/plan.md`, `specs/001-class-schedule-manager/data-model.md`, `specs/001-class-schedule-manager/contracts/ui-contract.md`, `specs/001-class-schedule-manager/research.md`

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 Crear estructura de archivos de la aplicación web en `web/` con `index.html`, `styles.css` y `app.js`
- [x] T002 Agregar archivo `README.md` de feature con pasos rápidos de ejecución en `specs/001-class-schedule-manager/quickstart.md`

## Phase 2: Foundational (Bloqueo)

- [x] T003 [P] [US1] Definir el modelo de clase en `specs/001-class-schedule-manager/data-model.md` (id, nombre, dia, hora) y validaciones básicas
- [x] T004 [P] Implementar contrato de UI en `specs/001-class-schedule-manager/contracts/ui-contract.md` para formulario + lista + persistence
- [x] T005 [P] Configurar bootstrap CDN y estructura HTML base en `web/index.html`
- [x] T006 [P] Implementar funciones de persistencia `loadClasses()` y `saveClasses()` en `web/app.js`

## Phase 3: User Story US1 - Agregar Clase (P1)

- [x] T007 [US1] Implementar el formulario de agregar clase en `web/index.html` con inputs `class-name`, `class-day`, `class-time` y botón `add-class-btn`
- [x] T008 [US1] Implementar validación de campos no vacíos en `web/app.js` con mensajes de error mostrados en `web/index.html`
- [x] T009 [US1] Implementar lógica `addClass` en `web/app.js` que agrega una clase al estado y actualiza `localStorage`
- [x] T010 [US1] Agregar pruebas manuales en `specs/001-class-schedule-manager/quickstart.md` para validar agregar clase (Given/When/Then)

## Phase 4: User Story US2 - Ver Lista de Clases (P2)

- [x] T011 [US2] Implementar renderizado de lista de clases en `web/app.js` dentro del contenedor `classes-list` en `web/index.html`
- [x] T012 [US2] Implementar formato de lista/tabla de clases en `web/index.html` (nombre, día, hora, botón borrar)
- [x] T013 [US2] Implementar carga inicial de clases desde `localStorage` al arrancar la página en `web/app.js`

## Phase 5: User Story US3 - Borrar Clase (P3)

- [x] T014 [US3] Implementar generación de `id` único para cada clase en `web/app.js` al agregar
- [x] T015 [US3] Implementar botón de borrar clase en cada item de lista y función `removeClass(id)` en `web/app.js`
- [x] T016 [US3] Implementar persistencia de cambios tras borrar y re-render con estado actualizado

## Phase 6: Polish & Cross-Cutting

- [x] T017 [P] Refactorizar `web/app.js` para mantener funciones puras y comentarios en español
- [x] T018 [P] Ajustar estilos en `web/styles.css` para mejor legibilidad y accesibilidad (claro, simple, responsive básica)
- [x] T019 [P] Realizar prueba manual completa: agregar + listar + borrar y verificar persistence de `localStorage`
- [x] T020 [P] Documentar en `specs/001-class-schedule-manager/quickstart.md` cómo probar la app localmente y cómo limpiar `localStorage`

## Dependencies

- US1 debe completarse antes de US2/US3 (agregar datos base)
- US2 y US3 dependen de la implementación de la estructura básica y carga inicial

## Parallel Execution Opportunities

- [P] T003, T004, T005, T006 pueden hacerse en paralelo porque son tareas fundacionales de diseño y setup.
- [P] T017, T018, T020 pueden hacerse en paralelo una vez que la funcionalidad principal esté implementada.

## MVP Scope

- Alcance MVP: US1 + US2 + US3 implementadas y funcionando con `localStorage` (T007-T016) y pruebas manuales.

## Implementation Strategy

1. Build fast in the `web/` static folder with plain HTML/CSS/JS.
2. Keep state in a single array `classes` and update immutably (`classes = [...classes, newClass]` and `classes = classes.filter(...)`).
3. Persist state to `localStorage` after each mutation.
4. Render list from state every time (simple re-render).  
5. Keep comments en español y mantener código simple para la demo universitaria.
