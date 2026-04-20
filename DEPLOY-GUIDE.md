# 🚀 Guía de Despliegue a Netlify

## 📋 Checklist Pre-Despliegue

### ✅ Seguridad
- [x] Revisado `SECURITY.md` - Todo OK
- [x] No hay credenciales en el código
- [x] Agent ID es público (diseñado para frontend)
- [x] Headers de seguridad configurados
- [ ] Configurar límites en ElevenLabs Dashboard
- [ ] Configurar whitelist de dominios en ElevenLabs

### ✅ Archivos de Configuración
- [x] `netlify.toml` creado
- [x] `_headers` creado
- [x] `.gitignore` actualizado

---

## 🛠️ Pasos para Desplegar

### 1. **Generar Build de Producción**

```bash
cd ia-elevenlabs-chat
npm run build
```

**Resultado esperado:**
```
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Output location: dist/ia-elevenlabs-chat/browser
```

---

### 2. **Verificar Archivos del Build**

Asegúrate de que existan estos archivos:
```
dist/ia-elevenlabs-chat/browser/
├── index.html
├── main-[hash].js
├── polyfills-[hash].js
├── styles-[hash].css
├── favicon.ico
├── 3rdpartylicenses.txt
```

---

### 3. **Copiar Archivos de Configuración al Build**

**IMPORTANTE:** Copia estos archivos a la carpeta del build:

```bash
# Desde la raíz del proyecto ia-elevenlabs-chat
copy netlify.toml dist\ia-elevenlabs-chat\browser\
copy _headers dist\ia-elevenlabs-chat\browser\
```

O manualmente:
1. Copia `netlify.toml` → `dist/ia-elevenlabs-chat/browser/`
2. Copia `_headers` → `dist/ia-elevenlabs-chat/browser/`

---

### 4. **Desplegar a Netlify (Método Manual)**

#### Opción A: Drag & Drop en Netlify

1. Ve a https://app.netlify.com
2. Inicia sesión o crea una cuenta
3. Click en **"Add new site"** → **"Deploy manually"**
4. Arrastra la carpeta completa: `dist/ia-elevenlabs-chat/browser`
5. Espera a que termine el despliegue
6. ¡Listo! Tu sitio está en línea

#### Opción B: Netlify CLI

```bash
# Instalar Netlify CLI (solo una vez)
npm install -g netlify-cli

# Iniciar sesión
netlify login

# Desplegar
cd dist/ia-elevenlabs-chat/browser
netlify deploy --prod
```

---

### 5. **Configurar Dominio Personalizado (Opcional)**

1. En Netlify Dashboard → **Site settings** → **Domain management**
2. Click en **"Add custom domain"**
3. Sigue las instrucciones para configurar DNS

---

## 🔐 Configuración Post-Despliegue en ElevenLabs

### IMPORTANTE: Configurar Límites y Seguridad

1. **Ve al Dashboard de ElevenLabs:**
   - https://elevenlabs.io/app

2. **Configura Límites de Uso:**
   - Settings → Usage Limits
   - Establece límites diarios/mensuales
   - Habilita alertas de uso excesivo

3. **Configura Whitelist de Dominios:**
   - Settings → Allowed Domains
   - Agrega tu dominio de Netlify: `tu-sitio.netlify.app`
   - Esto previene que otros sitios usen tu agent-id

4. **Habilita Notificaciones:**
   - Settings → Notifications
   - Activa alertas por email
   - Configura umbrales de uso

---

## 📊 Verificación Post-Despliegue

### Checklist de Verificación:

1. **Funcionalidad:**
   - [ ] El sitio carga correctamente
   - [ ] El widget de ElevenLabs aparece
   - [ ] El widget responde a interacciones
   - [ ] El diseño se ve correcto en móvil
   - [ ] El diseño se ve correcto en desktop

2. **Seguridad:**
   - [ ] HTTPS está activo (candado verde)
   - [ ] Headers de seguridad configurados
   - [ ] No hay errores en la consola del navegador
   - [ ] Límites configurados en ElevenLabs

3. **Rendimiento:**
   - [ ] Tiempo de carga < 3 segundos
   - [ ] Widget carga correctamente
   - [ ] Sin errores 404

---

## 🔍 Verificar Headers de Seguridad

Usa estas herramientas para verificar la seguridad:

1. **Security Headers:**
   - https://securityheaders.com
   - Ingresa tu URL de Netlify
   - Deberías obtener una calificación A o superior

2. **SSL Labs:**
   - https://www.ssllabs.com/ssltest/
   - Verifica tu certificado SSL
   - Deberías obtener una calificación A+

3. **Chrome DevTools:**
   - Abre tu sitio
   - F12 → Network → Selecciona index.html
   - Verifica que los headers de seguridad estén presentes

---

## 🐛 Solución de Problemas

### Problema 1: Widget no aparece

**Solución:**
1. Abre la consola del navegador (F12)
2. Busca errores relacionados con ElevenLabs
3. Verifica que el agent-id sea correcto
4. Verifica que el dominio esté en la whitelist de ElevenLabs

### Problema 2: Error de CORS

**Solución:**
1. Verifica que el dominio esté en la whitelist de ElevenLabs
2. Asegúrate de que estés usando HTTPS
3. Limpia caché del navegador

### Problema 3: Estilos no cargan

**Solución:**
1. Verifica que todos los archivos estén en `dist/ia-elevenlabs-chat/browser`
2. Limpia caché de Netlify: Site settings → Build & deploy → Clear cache
3. Re-despliega el sitio

### Problema 4: Error 404 en rutas

**Solución:**
1. Verifica que `netlify.toml` esté en la carpeta del build
2. Verifica la configuración de redirects en `netlify.toml`

---

## 📈 Monitoreo y Mantenimiento

### Monitoreo Diario:
- Revisa métricas de uso en ElevenLabs Dashboard
- Verifica que no haya errores en Netlify Dashboard

### Monitoreo Semanal:
- Revisa logs de Netlify
- Verifica rendimiento del sitio
- Revisa alertas de uso de ElevenLabs

### Monitoreo Mensual:
- Actualiza dependencias de Angular
- Revisa actualizaciones del widget de ElevenLabs
- Verifica certificado SSL

---

## 🔄 Actualizar el Sitio

Para actualizar el contenido:

1. Haz cambios en el código fuente
2. Genera nuevo build: `npm run build`
3. Copia archivos de configuración al build
4. Arrastra la nueva carpeta `browser` a Netlify
5. Netlify automáticamente desplegará la nueva versión

---

## 📞 Soporte

### Netlify:
- Dashboard: https://app.netlify.com
- Docs: https://docs.netlify.com
- Support: https://www.netlify.com/support

### ElevenLabs:
- Dashboard: https://elevenlabs.io/app
- Docs: https://elevenlabs.io/docs
- Support: support@elevenlabs.io

---

## ✅ Checklist Final

Antes de considerar el despliegue completo:

- [ ] Build generado correctamente
- [ ] Archivos de configuración copiados
- [ ] Sitio desplegado en Netlify
- [ ] HTTPS activo
- [ ] Widget funciona correctamente
- [ ] Límites configurados en ElevenLabs
- [ ] Whitelist de dominios configurada
- [ ] Headers de seguridad verificados
- [ ] Monitoreo configurado
- [ ] Alertas habilitadas

---

## 🎉 ¡Felicidades!

Tu aplicación está desplegada de forma segura en Netlify.

**URL de tu sitio:** `https://tu-sitio.netlify.app`

**Próximos pasos:**
1. Comparte el link con tus usuarios
2. Monitorea el uso regularmente
3. Mantén el sitio actualizado

---

**Última actualización:** 2025-10-08  
**Versión:** 1.0.0



