# 🛍️ Hype Spot - Premium Shopify Theme

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Shopify](https://img.shields.io/badge/Shopify-Online%20Store%202.0-green.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Un tema premium de Shopify diseñado con estética minimalista estilo Apple para tiendas de tecnología, moda y lifestyle.

---

## ✨ Características

### 🎨 Diseño Premium
- Estilo minimalista inspirado en Apple, Nothing y Sony
- Animaciones suaves con CSS puro
- Efectos glass y sombras profesionales
- Tipografía Inter de Google Fonts
- Gradientes y paleta gris/plateado con acentos naranja

### 📱 Totalmente Responsive
- **Mobile**: Menú hamburguesa, diseño vertical optimizado
- **Tablet**: Layout adaptativo inteligente
- **Desktop**: Navegación completa, grid de 4 columnas

### 🛒 Funcionalidad Completa
- Header sticky con búsqueda integrada
- Hero animado con productos flotantes 3D
- 3 categorías principales (Tecnología, Moda, Accesorios)
- Grid de productos con hover elegante
- Página de producto con galería de imágenes
- Carrito lateral (Ajax) funcional
- Footer premium con redes sociales

### ⚡ Rendimiento Optimizado
- Sin dependencias externas (React, Vue, etc.)
- CSS y JavaScript vanilla puros
- Carrito Ajax sin recargas
- Carga rápida y eficiente

### 🌍 Multiidioma
- Español (predeterminado)
- Inglés
- Fácil de agregar más idiomas

---

## 🚀 Instalación Rápida

### Opción 1: Conectar desde GitHub (Recomendado)

```bash
# 1. Clonar o descargar este repositorio
git clone https://github.com/TU_USUARIO/hype-spot-shopify.git
cd hype-spot-shopify

# 2. Subir a tu GitHub
git remote set-url origin https://github.com/TU_USUARIO/tu-repositorio.git
git push -u origin main

# 3. En Shopify Admin:
# Themes → Add theme → Connect from GitHub
# Selecciona: tu-repositorio / rama main
```

### Opción 2: Subir ZIP

```bash
# 1. Descargar como ZIP
# 2. En Shopify Admin:
# Themes → Add theme → Upload ZIP file
# 3. Selecciona el archivo ZIP descargado
```

**Guía detallada**: Ver `GITHUB_INTEGRATION.md` para instrucciones paso a paso

---

## 📋 Estructura del Tema

```
hype-spot-shopify/
├── assets/                    # Archivos CSS, JS e imágenes
│   ├── base.css              # Estilos base del tema
│   ├── global.js             # JavaScript global
│   ├── component-*.css       # Estilos de componentes
│   └── section-*.css         # Estilos de secciones
├── config/                    # Configuración del tema
│   ├── settings_schema.json  # Opciones configurables
│   └── settings_data.json    # Configuración actual (generado)
├── layout/                    # Layout principal
│   └── theme.liquid          # Template base HTML
├── locales/                   # Traducciones
│   ├── en.default.json       # Inglés
│   └── es.json               # Español
├── sections/                  # Secciones reutilizables
│   ├── header.liquid         # Header del sitio
│   ├── hero-banner.liquid    # Hero principal
│   ├── category-grid.liquid  # Grid de categorías
│   ├── featured-collection.liquid  # Productos destacados
│   ├── main-product.liquid   # Página de producto
│   ├── footer.liquid         # Footer del sitio
│   └── ...
├── snippets/                  # Componentes pequeños
│   ├── cart-drawer.liquid    # Carrito lateral
│   ├── card-product.liquid   # Tarjeta de producto
│   └── icon-*.liquid         # Iconos SVG
└── templates/                 # Templates de páginas
    ├── index.json            # Homepage
    ├── product.json          # Página de producto
    └── collection.json       # Página de colección
```

---

## ⚙️ Configuración Inicial

### 1. Crear las 3 Colecciones Principales

El tema está diseñado para 3 categorías principales:

| Nombre | Handle | URL |
|--------|--------|-----|
| Tecnología | `tecnologia` | `/collections/tecnologia` |
| Moda | `moda` | `/collections/moda` |
| Accesorios | `accesorios` | `/collections/accesorios` |

**Cómo crear**:
1. **Products → Collections → Create collection**
2. Nombre: "Tecnología"
3. Handle: Dejar automático (`tecnologia`)
4. **Save**
5. Repetir para "Moda" y "Accesorios"

### 2. Agregar Productos

**Mínimo recomendado**: 8 productos

**Por producto**:
- Título descriptivo
- Precio
- 1-4 imágenes de alta calidad (renders o fotos)
- Tipo de producto
- **Importante**: Asignar a una colección

### 3. Configurar Homepage

1. **Online Store → Themes → Customize**
2. Sección **"Featured Collection"**:
   - Collection: Selecciona una colección
   - Products to show: 8
3. **Save**

---

## 🎨 Personalización

### Cambiar Colores del Tema

**Método 1: Desde el Editor Visual**
1. **Themes → Customize → ⚙️ Theme settings**
2. **Colors**
3. Ajusta los colores

**Método 2: Editar el Código**

Edita `layout/theme.liquid`:

```liquid
{% style %}
  :root {
    --color-accent: 251, 146, 60;     /* Naranja → Tu color */
    --color-background: 255, 255, 255; /* Blanco */
    --color-text: 17, 24, 39;          /* Negro */
  }
{% endstyle %}
```

### Cambiar Logo

1. **Themes → Customize**
2. Click en **"Header"** (sección superior)
3. Sube tu logo
4. Ajusta el tamaño
5. **Save**

**Recomendaciones**:
- Formato: PNG con transparencia
- Alto: 40-60px
- Proporción: Horizontal o cuadrado

### Cambiar Fuentes

1. **Themes → Customize → ⚙️ Theme settings**
2. **Typography**
3. Selecciona fuentes para:
   - **Heading font**: Títulos
   - **Body font**: Texto general

### Agregar Favicon

1. **Settings → Files** → Sube tu favicon (32x32px)
2. **Themes → Customize → ⚙️ Theme settings**
3. **Favicon** → Selecciona la imagen
4. **Save**

### Configurar Redes Sociales

1. **Themes → Customize → ⚙️ Theme settings**
2. **Social media**
3. Agrega URLs:
   - Facebook
   - Instagram
   - Twitter
4. **Save**

Los iconos aparecerán automáticamente en el footer.

---

## 📦 Componentes Principales

### Header (Header Sticky)
- Logo con icono geométrico
- Navegación: Tecnología, Moda, Accesorios
- Búsqueda desplegable
- Carrito con contador de items
- Menú mobile hamburguesa

### Hero Banner
- Título grande y elegante
- Subtítulo profesional
- Botón CTA animado
- Fondo gradient gris/plateado
- Productos flotantes (opcional)

### Category Grid
- 3 categorías principales con imágenes
- Hover elegante con zoom
- Links a colecciones
- Responsive grid

### Product Grid
- Cards premium con sombras suaves
- Hover con elevación
- Precio y título
- Botón "Add to Cart" rápido
- Grid responsive: 4/3/2/1 columnas

### Product Detail
- Galería de imágenes
- Selector de variantes
- Descripción y especificaciones
- Productos relacionados
- Botón "Add to Cart" destacado

### Cart Drawer
- Sidebar deslizante desde la derecha
- Lista de productos con imágenes
- Ajustar cantidades
- Subtotal actualizado en tiempo real
- Botón "Checkout" a Shopify

### Footer Premium
- Logo y descripción breve
- Links útiles
- Redes sociales
- Email de contacto
- Copyright

---

## 🔧 Personalización Avanzada

### Editar Estilos CSS

Los estilos están organizados en:
- `assets/base.css` - Estilos globales
- `assets/component-*.css` - Componentes específicos
- `assets/section-*.css` - Secciones específicas

### Editar JavaScript

El JavaScript está en:
- `assets/global.js` - Scripts globales
- Inline en secciones para funcionalidad específica

### Agregar Nuevas Secciones

1. Crea un nuevo archivo en `sections/`
2. Agrega el schema Liquid:

```liquid
{% schema %}
{
  "name": "Mi Sección",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Título"
    }
  ]
}
{% endschema %}
```

3. Usa la sección en templates JSON

---

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

### Shopify
- ✅ Shopify Online Store 2.0
- ✅ Compatible con Shopify Payments
- ✅ Compatible con aplicaciones de Shopify

---

## 🆘 Soporte

### Documentación
- **GITHUB_INTEGRATION.md** - Integración con GitHub
- **INSTALLATION_GUIDE.md** - Guía de instalación detallada
- **QUICKSTART.md** - Inicio rápido (10 minutos)

### Contacto
- **Email**: hypespotclient@gmail.com
- **Instagram**: [@hypespot](https://instagram.com/hypespot)

### Recursos
- [Documentación Shopify Themes](https://shopify.dev/docs/themes)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)
- [GitHub Issues](https://github.com/TU_USUARIO/hype-spot-shopify/issues)

---

## 📄 Licencia

Este tema está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🎉 Créditos

**Desarrollado por**: Hype Spot Team  
**Email**: hypespotclient@gmail.com  
**Diseño**: Inspirado en Apple, Nothing y Sony  
**Fuentes**: Inter (Google Fonts)  

---

## 🚀 Próximas Actualizaciones

- [ ] Mega menú desplegable
- [ ] Quick view de productos
- [ ] Filtros avanzados de colección
- [ ] Wishlist integrada
- [ ] Color swatches para variantes
- [ ] Lookbook section
- [ ] Instagram feed

---

**¿Te gusta el tema?** Dale una ⭐ en GitHub y compártelo con otros.

**¿Necesitas ayuda?** Abre un Issue o envía un email a hypespotclient@gmail.com