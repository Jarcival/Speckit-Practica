# Quickstart: Ejecutar Class Schedule Manager

## Requisitos

- Navegador moderno (Chrome, Edge, Firefox).
- No se requiere servidor ni instalación adicional.

## Ejecutar localmente

1. Abre el archivo `web/index.html` en el navegador.
2. Verás el formulario para agregar clases y la lista (vacía inicialmente).
3. Agrega una clase con Nombre, Día y Hora, luego haz clic en "Agregar".
4. La clase se mostrará en la lista y se guardará en `localStorage`.
5. Recarga la página para verificar que las clases persisten.

## Desarrollo

- El código principal está en `web/app.js`.
- El estilo básico está en `web/styles.css`.
- Bootstrap se carga desde CDN en `web/index.html`.

## Limpiando el almacenamiento

Para borrar todas las clases guardadas:

1. Abre las herramientas de desarrollo del navegador (F12).
2. Ve a la pestaña "Aplicación" / "Application".
3. En "Local Storage", selecciona el dominio y borra la clave `scheduleClasses`.
