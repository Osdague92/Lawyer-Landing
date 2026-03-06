# Lawyer Landing Page

Landing page profesional para servicios legales, construida con React, Vite, TailwindCSS, Framer Motion y Lucide React.

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
```

## Vista previa local del build

```bash
npm run preview
```

## Despliegue en Netlify

Este repositorio ya incluye un archivo `netlify.toml` con la configuración de build y redirecciones para SPA.

1. Sube este repositorio a GitHub.
2. En Netlify, selecciona **Add new site → Import an existing project**.
3. Conecta tu repositorio.
4. Verifica (o usa) esta configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18` (definida en `netlify.toml`)
5. Despliega el sitio.

### Si el deploy falla

- Revisa que Netlify esté instalando dependencias con `npm install` sin errores de permisos/red.
- Confirma que no estés publicando la raíz del repo; debe publicar `dist`.
- Si ves errores 404 en rutas internas, la redirección SPA en `netlify.toml` (`/* -> /index.html`) lo corrige.
- Para Netlify Forms en React, el formulario debe enviar a `/` y mantener `name="contacto"`, `data-netlify="true"` y `input hidden form-name`.

### Netlify Forms

El formulario de contacto está configurado para Netlify Forms con:

- `data-netlify="true"`
- `name="contacto"`
- `input hidden form-name`
- campo honeypot `bot-field`

No se requiere backend adicional para captar envíos.
