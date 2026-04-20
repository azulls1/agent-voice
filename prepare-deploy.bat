@echo off
REM Script para preparar el despliegue a Netlify
REM Ejecutar desde la raíz del proyecto ia-elevenlabs-chat

echo ========================================
echo   Preparando Despliegue a Netlify
echo ========================================
echo.

REM Paso 1: Generar build de producción
echo [1/4] Generando build de producción...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Falló la generación del build
    pause
    exit /b 1
)
echo ✓ Build generado correctamente
echo.

REM Paso 2: Verificar que existe la carpeta de build
if not exist "dist\ia-elevenlabs-chat\browser" (
    echo ERROR: No se encontró la carpeta de build
    pause
    exit /b 1
)
echo ✓ Carpeta de build encontrada
echo.

REM Paso 3: Copiar archivos de configuración
echo [2/4] Copiando archivos de configuración...
copy /Y netlify.toml dist\ia-elevenlabs-chat\browser\ >nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: No se pudo copiar netlify.toml
    pause
    exit /b 1
)
echo ✓ netlify.toml copiado

copy /Y _headers dist\ia-elevenlabs-chat\browser\ >nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: No se pudo copiar _headers
    pause
    exit /b 1
)
echo ✓ _headers copiado
echo.

REM Paso 4: Mostrar resumen
echo [3/4] Verificando archivos...
echo.
echo Archivos en dist\ia-elevenlabs-chat\browser:
dir /B dist\ia-elevenlabs-chat\browser
echo.

REM Paso 5: Instrucciones finales
echo [4/4] ¡Preparación completa!
echo ========================================
echo.
echo Archivos listos para desplegar en:
echo   dist\ia-elevenlabs-chat\browser
echo.
echo Próximos pasos:
echo   1. Ve a https://app.netlify.com
echo   2. Click en "Add new site" → "Deploy manually"
echo   3. Arrastra la carpeta: dist\ia-elevenlabs-chat\browser
echo   4. Espera a que termine el despliegue
echo.
echo IMPORTANTE - Después del despliegue:
echo   - Configura límites en ElevenLabs Dashboard
echo   - Agrega tu dominio a la whitelist de ElevenLabs
echo   - Verifica headers de seguridad en securityheaders.com
echo.
echo ========================================
echo.
pause



