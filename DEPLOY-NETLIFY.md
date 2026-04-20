# 🚀 Guía Rápida de Deploy en Netlify

## Pasos para Subir a Netlify

### 1. Compilar el Proyecto

Abre una terminal en el directorio del proyecto y ejecuta:

```bash
ng build --configuration production
```

Esto generará los archivos optimizados en: `dist/ia-elevenlabs-chat/browser/`

### 2. Subir a Netlify (Drag & Drop)

#### Opción A: Sitio Nuevo

1. Ve a [https://app.netlify.com/](https://app.netlify.com/)
2. Click en **"Add new site"** → **"Deploy manually"**
3. Arrastra la carpeta `dist/ia-elevenlabs-chat/browser` a la zona de drop
4. Espera a que termine el deploy (30-60 segundos)
5. ¡Tu sitio estará en línea con una URL tipo `random-name.netlify.app`!

#### Opción B: Actualizar Sitio Existente

1. Ve a tu sitio en Netlify
2. Click en la pestaña **"Deploys"**
3. Arrastra la carpeta `dist/ia-elevenlabs-chat/browser` a la zona que dice "Need to update your site?"
4. Espera a que termine el deploy

### 3. Verificar

1. Abre la URL de tu sitio
2. Verifica que:
   - Se vea el título "Hablar con el Agente IA"
   - El fondo sea navy con gradiente
   - Aparezca el widget de ElevenLabs
   - El widget responda a interacciones de voz/texto

## ⚠️ Importante

- **Sube la carpeta `browser`**, no la carpeta `ia-elevenlabs-chat`
- La ruta completa es: `dist/ia-elevenlabs-chat/browser/`
- No necesitas configurar redirects ni variables de entorno
- El widget de ElevenLabs requiere permisos de micrófono en el navegador

## 🎨 Personalización

### Cambiar el ID del Agente

Si quieres usar un agente diferente de ElevenLabs:

1. Edita `src/app/app.ts`
2. Busca la línea:
   ```typescript
   widgetEl.setAttribute('agent-id', 'agent_01jzhbdxm1e1q9grq89nevb297');
   ```
3. Reemplaza el ID con el tuyo
4. Ejecuta `ng build --configuration production` nuevamente
5. Sube la carpeta actualizada a Netlify

### Cambiar Colores

Los colores corporativos están definidos en `tailwind.config.js`:

```javascript
colors: {
  navy: "#0A1833",
  gold: "#D4AF37",
}
```

## 📱 Dominio Personalizado (Opcional)

Para usar tu propio dominio:

1. En Netlify, ve a **"Domain management"**
2. Click en **"Add custom domain"**
3. Sigue las instrucciones para configurar tu DNS

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

1. `ng build --configuration production`
2. Arrastra la nueva carpeta `browser` a Netlify
3. Netlify automáticamente reemplazará la versión anterior

---

**¿Problemas?** Revisa la consola del navegador (F12) para errores JavaScript o CSS.


