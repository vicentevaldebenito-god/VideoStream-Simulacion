# Documentación del Proyecto: VideoStream

## Descripción General

VideoStream es una aplicación web para la reproducción de contenido multimedia e interacción de usuarios. La plataforma proporciona una interfaz estructurada para la visualización de videos principales, gestión de listas de reproducción secundarias (cola de reproducción), recomendaciones y componentes de interacción social como me gusta, suscripciones y almacenamiento de contenido.

---

## Estructura de Tecnologías

El proyecto está desarrollado con estándares web nativos sin dependencias externas:

- HTML5: Estructuración semántica de la interfaz y reproductor nativo de video.
- CSS3: Hojas de estilo para la maquetación y diseño visual.
- JavaScript (ES6+): Control de la lógica del cliente e interacciones en tiempo real.

---

## Arquitectura de Directorios

```text
video-stream/
│
├── index.html
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── images/
    │   ├── Logo.png
    │   ├── Lupa.png
    │   ├── Like.png
    │   ├── Dislike.png
    │   ├── Share.png
    │   ├── Save.jpg
    │   ├── Noti.png
    │   ├── Usuario.png
    │   ├── flecha.png
    │   └── png.png
    └── videos/
        └── Lagos.mp4
```

---

## Componentes de la Interfaz

### 1. Barra de Navegación (`header.header`)
Ubicada en la parte superior del sitio. Contiene:
- Identidad de marca (Logo y nombre VideoStream).
- Enlaces de navegación principal (Inicio, Explorar, Mi Lista).
- Campo de búsqueda con icono interactivo.
- Accesos directos a notificaciones y perfil de usuario.

### 2. Reproductor Principal y Metadatos (`div.video_Principal`)
Módulo central del sistema que incluye:
- Reproductor HTML5 dinámico con controles de reproducción nativos.
- Información del video: Título, contador de visualizaciones y fecha de publicación.
- Acciones de interacción: Botones de me gusta, no me gusta, compartir y añadir a la cola.
- Ficha del canal: Logo del creador, recuento de suscriptores, botón de suscripción dinámico y descripción expandible del contenido.

### 3. Lateral de Gestión de Contenido (`div.cola_Videos`)
Dividido en dos bloques principales:
- **Siguiente en la cola:** Muestra la lista de videos programados para reproducción continua, con opción global para limpiar la cola y botones individuales para remover elementos. Permite reproducción en miniatura mediante eventos de cursor.
- **Recomendados:** Lista de contenidos sugeridos con la posibilidad de agregarlos directamente a la cola de reproducción.

### 4. Galería Secundaria (`div.videos_Extras`)
Sección ubicada al pie del panel principal para la exploración rápida de videos adicionales dentro del catálogo de la plataforma.

---

## Funcionalidades del Cliente

- **Gestión de Interacción:** Manipulación del DOM mediante JavaScript para actualización dinámica de contadores y estados de suscripción.
- **Vista Previa Multimedial:** Eventos `mouseover` y `mouseout` en miniaturas de video para previsualización automática con audio silenciado y reproducción en bucle.

---

## Autor

Desarrollado por **Vicente Valdebenito**.