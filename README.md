# Hablar con el Agente IA

SPA de Angular que integra el widget ElevenLabs Convai para conversaciones en tiempo real con un agente de IA.

## 🎨 Características

- **Arquitectura**: Angular 19 standalone (sin SSR)
- **Estilos**: Tailwind CSS con paleta corporativa navy + dorado
- **Widget**: ElevenLabs Convai integrado como Web Component
- **Tipografía**: Inter de Google Fonts

## 🎨 Paleta de Colores

- **Navy**: `#0A1833`
- **Dorado**: `#D4AF37`
- **Blanco**: `#FFFFFF`

## 🚀 Instalación y Desarrollo

### Requisitos

- Node.js >= 18
- npm >= 9
- Angular CLI (se instala globalmente)

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
# o
ng serve -o
```

La aplicación estará disponible en `http://localhost:4200`

## 📦 Build de Producción

```bash
# Compilar para producción
ng build --configuration production
```

Los archivos compilados se generan en: `dist/ia-elevenlabs-chat/browser/`

## 🌐 Deploy en Netlify

### Método Manual (Drag & Drop)

1. Compila el proyecto:
   ```bash
   ng build --configuration production
   ```

2. Ve a [Netlify](https://app.netlify.com/)

3. En tu sitio o uno nuevo:
   - Click en **"Deploys"**
   - Click en **"Deploy site"** (o "Drag and drop")
   - Arrastra la carpeta: `dist/ia-elevenlabs-chat/browser`

4. ¡Listo! Tu sitio estará en línea en segundos.

### Notas sobre Deploy

- **No se requiere** archivo `_redirects` ya que es una SPA sin routing
- El widget de ElevenLabs se carga desde CDN (no requiere configuración adicional)
- Asegúrate de subir la carpeta `browser`, no la carpeta padre

## 🔧 Configuración del Widget

El ID del agente de ElevenLabs se encuentra en:
```typescript
// src/app/app.ts
widgetEl.setAttribute('agent-id', 'agent_01jzhbdxm1e1q9grq89nevb297');
```

Para usar un agente diferente, reemplaza este ID con el tuyo.

## 📁 Estructura del Proyecto

```
ia-elevenlabs-chat/
├── src/
│   ├── app/
│   │   ├── app.ts          # Componente principal
│   │   ├── app.html        # Template
│   │   └── app.css         # Estilos del componente
│   ├── index.html          # HTML base con script del widget
│   └── styles.css          # Estilos globales + Tailwind
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # Configuración de PostCSS
└── angular.json            # Configuración de Angular
```

## 🎯 Características Implementadas

- ✅ Angular standalone sin routing
- ✅ Tailwind CSS v3 configurado
- ✅ Paleta corporativa (navy + dorado)
- ✅ Widget ElevenLabs Convai integrado
- ✅ Diseño responsive
- ✅ Tipografía Inter
- ✅ Build de producción optimizado
- ✅ Listo para deploy en Netlify

## 📝 Licencia

Este proyecto es parte de una implementación privada.
