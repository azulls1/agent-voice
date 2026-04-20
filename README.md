# IaGentek - Agente IA de Voz

Aplicación web de **IaGentek** que integra el widget ElevenLabs Convai para conversaciones en tiempo real con un agente de inteligencia artificial por voz.

## Características

- **Arquitectura**: Angular 20 standalone (sin SSR)
- **Design System**: Forest DS (theme propio, sin Tailwind)
- **Widget**: ElevenLabs Convai integrado como Web Component
- **Tipografías**: Sora, DM Sans, JetBrains Mono (Google Fonts)
- **Marca**: IaGentek con logos propios

## Paleta de Colores (Forest DS)

- **Forest**: `#04202C` (principal oscuro)
- **Pine**: `#5B7065` (texto secundario)
- **Sage**: `#9EADA3` (acentos)
- **Cream**: `#F8F6F0` (fondo)
- **Emerald**: `#059669` (éxito)

## Instalación y Desarrollo

### Requisitos

- Node.js >= 18
- npm >= 9

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Build de Producción

```bash
ng build --configuration production
```

Los archivos compilados se generan en: `dist/ia-elevenlabs-chat/browser/`

## Deploy en Netlify

### Método Manual (Drag & Drop)

1. Compila el proyecto:
   ```bash
   ng build --configuration production
   ```

2. Ve a [Netlify](https://app.netlify.com/)

3. Arrastra la carpeta `dist/ia-elevenlabs-chat/browser` en el panel de Deploys.

### Deploy automático

El proyecto incluye `netlify.toml` con la configuración lista para CI/CD desde GitHub.

## Configuración del Widget

El ID del agente de ElevenLabs se encuentra en `src/index.html`:

```html
<elevenlabs-convai agent-id="agent_01jzhbdxm1e1q9grq89nevb297">
```

Para usar un agente diferente, reemplaza este ID con el tuyo.

## Estructura del Proyecto

```
ia-elevenlabs-chat/
├── public/
│   └── assets/
│       ├── logos/          # Logos IaGentek (.webp)
│       ├── icons/          # Iconos
│       └── images/         # Imágenes generales
├── src/
│   ├── app/
│   │   ├── app.ts          # Componente principal
│   │   ├── app.html        # Template
│   │   └── app.css         # Estilos del componente
│   ├── css/
│   │   ├── forest.css      # Entry point del Design System
│   │   ├── forest-theme.css
│   │   ├── forest-components.css
│   │   ├── forest-animations.css
│   │   ├── forest-dark-surface.css
│   │   ├── forest-layout.css
│   │   ├── forest-utilities.css
│   │   └── forest-print.css
│   ├── index.html          # HTML base con widget ElevenLabs
│   └── styles.css          # Estilos globales (importa Forest DS)
├── netlify.toml            # Config de deploy Netlify
├── _headers                # Headers de seguridad
└── angular.json            # Configuración de Angular
```

## Funcionalidades

- Angular 20 standalone sin routing
- Forest Design System completo (sin dependencias CSS externas)
- Logos e identidad IaGentek integrados
- Widget ElevenLabs Convai con voz en tiempo real
- Secciones interactivas expandibles (pasos y features)
- Diseño responsive mobile-first
- Headers de seguridad configurados
- Listo para deploy en Netlify

## Autor

**Samael Hernandez** - IaGentek

© 2026 Samael Hernandez · Powered by ElevenLabs Agents
