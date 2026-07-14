<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Skills del Proyecto

## Skill: Optimización y Carga de Imágenes

Esta guía detalla el procedimiento estándar para agregar, optimizar y registrar nuevas imágenes en las galerías de la aplicación web.

### 1. Preparación de Archivos Originales
* Guarda las imágenes en formato `.jpeg`, `.jpg` o `.png` dentro del directorio correspondiente en `public/imagenes/`.
* Los nombres de archivo deben ser descriptivos y usar guiones (`-`) para separar las palabras (ej. `Truss-eventos.jpeg`).
* **Regla de Etiquetas Automáticas:** El componente del frontend utiliza la función `getProductNameFromUrl()` para generar dinámicamente la etiqueta de la imagen. Los guiones se convierten en espacios y se capitaliza cada palabra (ej. `Truss-eventos.webp` se renderizará en el frontend como `Truss Eventos`).

### 2. Conversión a WebP y Respaldo
Para optimizar las imágenes y mover los originales a la carpeta de copias de seguridad de forma automatizada, ejecuta el script de conversión:

```powershell
# Asegúrate de estar en el directorio del frontend
cd multiespaciosWeb

# Ejecuta el script de optimización
node scripts/convert-images.js
```

Este script se encarga de:
* Convertir las imágenes JPG/PNG a `.webp` (calidad 80).
* Crear copias de respaldo de las imágenes originales en `backups/imagenes-originales/...`.
* Actualizar automáticamente cualquier referencia directa a los archivos antiguos en los archivos de código (`.ts`, `.tsx`, `.css`).

### 3. Registro en los Datos de la Aplicación (`data.ts`)
* Navega al archivo `data.ts` correspondiente de la sección que estás actualizando (ej. `src/app/estructuras/data.ts` o `src/app/carpas/data.ts`).
* Localiza el ítem de la galería y actualiza la propiedad `image` con la ruta o un array de rutas de las nuevas imágenes `.webp`.
* **Foto de Portada:** La primera imagen declarada en el array de la propiedad `image` será la utilizada como portada en la tarjeta principal.

Ejemplo de estructura en `data.ts`:
```typescript
{
  title: "Estructura Truss",
  category: "Estructuras",
  dimensions: "Personalizable",
  image: [
    "/imagenes/2_Estructuras_y_tarimas/Estructuras/Estructura Truss/Truss-eventos.webp",
    "/imagenes/2_Estructuras_y_tarimas/Estructuras/Estructura Truss/Truss-eventos-2.webp"
  ],
  description: "Sistemas de aluminio modulares esenciales para el soporte seguro de iluminación, sonido y pantallas gigantes.",
}
```

