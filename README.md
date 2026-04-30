# Gestor de Horarios - Class Schedule Manager

[![Demostración](https://img.shields.io/badge/Demo-Universidad-blue?style=flat-square)](.)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020+-yellow?style=flat-square&logo=javascript)](.)
[![HTML5](https://img.shields.io/badge/HTML5-Validated-red?style=flat-square&logo=html5)](.)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat-square&logo=bootstrap)](.)

##  Descripción

**Gestor de Horarios** es una aplicación web educativa que permite a estudiantes organizar sus clases de forma simple y rápida. Los usuarios pueden agregar, visualizar y eliminar clases de su horario semanal. Los datos se guardan automáticamente en el navegador usando `localStorage`, lo que permite que la información persista entre sesiones sin necesidad de un servidor.

Este proyecto es una **demostración educativa universitaria** que muestra cómo construir una aplicación web funcional usando **HTML puro, CSS con Bootstrap, y JavaScript Vanilla** (sin frameworks complejos).

---

##  Características

-  **Agregar clases** con nombre, día y hora
-  **Ver lista completa** de todas tus clases
-  **Borrar clases** individuales o todas de una vez
-  **Persistencia automática** usando `localStorage` en el navegador
-  **Interfaz simple y limpia** con Bootstrap CDN
-  **Sin servidor requerido** - funciona completamente en el navegador
-  **Código comentado en español** - ideal para aprender

---

##  Cómo Usar

1. **Agregar una clase**:
   - Completa los campos: Nombre (ej: "Matemáticas"), Día (ej: "Lunes"), Hora (ej: "10:00-11:00")
   - Haz clic en "Agregar"
   - La clase aparecerá en tu horario

2. **Ver mi horario**:
   - Todas tus clases se muestran en la tabla debajo del formulario
   - Se actualiza automáticamente al agregar o borrar

3. **Borrar una clase**:
   - Haz clic en el botón rojo "Borrar" en la fila de la clase que quieres eliminar
   - O usa "Borrar todo" para limpiar el horario completo

4. **Guardar datos**:
   - Todo se guarda automáticamente en `localStorage`
   - Al recargar la página, tus clases seguirán ahí

---

## 📁 Estructura del Proyecto

```
.
├── web/                          # Aplicación web (frontend)
│   ├── index.html               # HTML principal con estructura y formulario
│   ├── styles.css               # Estilos personalizados (complementa Bootstrap)
│   └── app.js                   # Lógica de la aplicación (JS puro)
│
├── specs/                        # Documentación de diseño (Spect_Kit)
│   └── 001-class-schedule-manager/
│       ├── spec.md              # Especificación de requisitos
│       ├── plan.md              # Plan de implementación
│       ├── research.md          # Decisiones técnicas y investigación
│       ├── data-model.md        # Modelo de datos de la aplicación
│       ├── quickstart.md        # Guía rápida de inicio
│       ├── tasks.md             # Lista de tareas de desarrollo
│       └── contracts/
│           └── ui-contract.md   # Contrato de interfaz de usuario
│
├── .github/                      # Configuración de GitHub
│   └── prompts/                 # Prompts para agentes IA
│
├── .specify/                     # Especificación de templates y scripts
│   ├── templates/               # Templates de markdown para features
│   ├── memory/                  # Información de la constitución
│   └── scripts/                 # Scripts PowerShell para workflow
│
├── .vscode/                      # Configuración de VS Code
│   └── settings.json
│
├── .gitignore                    # Archivos ignorados por Git
└── README.md                     # Este archivo

```

---

##  Tecnologías Utilizadas

| Tecnología | Propósito |
|-----------|----------|
| **HTML5** | Estructura semántica del documento |
| **CSS3** | Estilos personalizados y responsive |
| **Bootstrap 5** | Framework CSS vía CDN (estilos, grid, componentes) |
| **JavaScript (Vanilla)** | Lógica de la aplicación, manejo de estado, persistencia |
| **LocalStorage API** | Persistencia de datos en el navegador |


##  Modelo de Datos

Una **Clase** se representa con estos campos:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | string | Identificador único generado por el cliente |
| `nombre` | string | Nombre de la asignatura (ej: "Matemáticas") |
| `dia` | string | Día de la semana (ej: "Lunes") |
| `hora` | string | Rango horario (ej: "10:00-11:00") |

---
