# Proyecto Página de Aerolíneas - Inspirado en Flybondi ✈️

## Descripción

Este es un proyecto de práctica desarrollado como una **Single Page Application (SPA)** con **React**, **JavaScript** y **Tailwind CSS**. La aplicación permite a los usuarios buscar vuelos /previamente cargados en el db.json/, gestionar reservas y confirmar pagos para guardar datos de pasajeros. Los vuelos y los datos de pasajeros se almacenan en un archivo `db.json`, simulado como una base de datos.

Este proyecto fue realizado inspirado en el sitio web de Flybondi.

## Características

- **Búsqueda de vuelos**: Consulta de vuelos precargados en `db.json`.
- **Reserva de vuelos**: Gestión de reservas de vuelos y visualización de detalles.
- **Confirmación de pago**: Al confirmar el pago, los datos del pasajero se guardan en `db.json`.
- **Interfaz SPA**: Toda la navegación y funcionalidades en una sola página.

## Instalación

Para ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
   git clone https://github.com/tu-usuario/proyecto-aerolineas.git

2. Instala las dependencias:
   npm install

3. Configura el archivo `.env`:
   El archivo `.env` no está incluido en el repositorio por razones de seguridad. Debes crear uno en la raíz del proyecto y definir la variable `VITE_BACKEND_URL` con la URL de tu servidor local.

   Ejemplo de archivo `.env`: VITE_BACKEND_URL=http://localhost:3001


4. Una vez completado, puedes ejecutar el proyecto de la siguiente manera:
- Inicia el entorno de desarrollo:
  npm run dev
- En una nueva terminal o dividida, inicia el servidor JSON:
  npm run server

5. Abre tu navegador y ve a la dirección local donde el proyecto está ejecutándose (normalmente `http://localhost:3000`).

## Tecnologías
- **React**: Framework de JavaScript para construir la interfaz de usuario.
- **JavaScript**: Lenguaje principal del proyecto.
- **Tailwind CSS**: Framework de CSS para estilos.
- **JSON Server**: Simulación de base de datos con `db.json`.
- **Librerías Adicionales**: `react-hook-form`, `tanstack-query`, `zustand`, `json-server`, `react-router-dom`, etc.

## Autores
Creado por **Juan Ignacio Veneziano**.
