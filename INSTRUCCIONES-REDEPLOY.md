# 🔄 Instrucciones para Re-Desplegar y Limpiar Caché

## ⚠️ El Error Persiste por Caché de Netlify

El error que estás viendo:
```
Content-Security-Policy: ... "connect-src 'self' https://api.elevenlabs.io https://*.elevenlabs.io"
```

Muestra que **NO incluye** `wss://`, lo que significa que Netlify está sirviendo la versión antigua cacheada.

---

## ✅ **Solución 1: Limpiar Caché y Re-Desplegar** (Recomendado)

### Paso 1: Ve a tu sitio en Netlify
```
1. Abre: https://app.netlify.com
2. Haz login
3. Selecciona tu sitio
```

### Paso 2: Limpiar Caché y Re-Desplegar
```
1. Click en "Site settings" (en el menú superior)
2. Scroll hasta "Build & deploy"
3. En la sección "Build settings", busca "Clear cache and retry deploy"
4. Click en "Clear cache and retry deploy"
```

### Paso 3: Subir Nuevo Deploy
```
1. Ve a la pestaña "Deploys"
2. Arrastra el archivo: netlify-deploy.zip
   O
   Arrastra todos los archivos de la carpeta browser/
```

---

## ✅ **Solución 2: Eliminar y Crear Nuevo Sitio** (Más rápido)

Si la Solución 1 no funciona o quieres estar 100% seguro:

### Paso 1: Eliminar sitio anterior
```
1. En Netlify, ve a tu sitio
2. Site settings → General → Danger zone
3. Click en "Delete this site"
4. Confirma la eliminación
```

### Paso 2: Crear nuevo sitio
```
1. Ve a: https://app.netlify.com/drop
2. Arrastra: netlify-deploy.zip
   (el que acabamos de generar)
3. Espera que termine el deploy
4. ¡Listo! Sin caché antiguo
```

---

## ✅ **Solución 3: Forzar Headers Nuevos** (Alternativa)

Si prefieres no eliminar el sitio, podemos usar un "cache buster":

### Agregar timestamp al deploy:
```
1. Ve a: C:\Users\azull\OneDrive\Desktop\Agent-iavoz\ia-elevenlabs-chat\dist\ia-elevenlabs-chat\browser
2. Abre el archivo: _headers (con notepad)
3. Agrega al inicio (primera línea):
   # Updated: 2025-10-08 16:15:00
4. Guarda el archivo
5. Vuelve a crear el ZIP o sube los archivos directamente
```

---

## 🎯 **Recomendación: Usa Solución 2**

**¿Por qué?**
- Es la forma más rápida
- Garantiza que no haya caché
- El sitio anterior no se pierde, solo cambia de URL
- Toma menos de 2 minutos

**Pasos:**
```
1. Elimina el sitio actual en Netlify
2. Ve a https://app.netlify.com/drop
3. Arrastra: netlify-deploy.zip
4. Prueba el nuevo sitio
5. ¡El widget funcionará!
```

---

## 🔍 **Cómo Verificar que Funcionó**

Después de re-desplegar:

1. **Abre tu sitio en modo incógnito** (para evitar caché del navegador)
   - Chrome: Ctrl + Shift + N
   - Firefox: Ctrl + Shift + P

2. **Abre la consola del navegador** (F12)

3. **Busca en el HTML los headers:**
   - Network tab → Selecciona "index.html"
   - Busca "Content-Security-Policy" en los headers
   - Debería incluir: `wss://api.elevenlabs.io wss://*.elevenlabs.io`

4. **Prueba el widget:**
   - Click en el widget
   - Debería pedir permiso del micrófono
   - NO debería mostrar error de CSP

---

## 📝 **Checklist de Verificación**

Después del re-deploy, verifica:

- [ ] Sitio carga correctamente
- [ ] Modo incógnito (sin caché del navegador)
- [ ] F12 → Console → Sin errores de CSP
- [ ] F12 → Network → index.html → Headers incluyen `wss://`
- [ ] Widget aparece en esquina inferior derecha
- [ ] Click en widget abre interfaz
- [ ] Navegador pide permiso de micrófono
- [ ] Conversación inicia sin errores

---

## ⚡ **Acción Rápida Recomendada**

```
1. Ve a: https://app.netlify.com
2. Elimina tu sitio actual
3. Ve a: https://app.netlify.com/drop
4. Arrastra: C:\Users\azull\OneDrive\Desktop\Agent-iavoz\ia-elevenlabs-chat\netlify-deploy.zip
5. Espera 1 minuto
6. Abre el nuevo sitio en incógnito
7. Prueba el widget
8. ¡Debería funcionar!
```

---

**Tiempo total:** 2-3 minutos
**Éxito garantizado:** ✅ Sin caché antiguo


