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

1. Sube este repositorio a GitHub.
2. En Netlify, selecciona **Add new site → Import an existing project**.
3. Conecta tu repositorio.
4. Usa esta configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Despliega el sitio.

### Netlify Forms

El formulario de contacto está configurado para Netlify Forms con:

- `data-netlify="true"`
- `name="contacto"`
- `input hidden form-name`
- campo honeypot `bot-field`

No se requiere backend adicional para captar envíos.
