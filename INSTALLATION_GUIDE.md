# 📦 Guía de Instalación Completa - Hype Spot Theme

Esta guía te llevará paso a paso para instalar el tema Hype Spot en tu tienda Shopify.

---

## 🎯 Método 1: GitHub (RECOMENDADO)

### Paso 1: Subir a GitHub

**Desde tu terminal local:**

```bash
# Navega a la carpeta del tema
cd shopify-theme

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Crea el primer commit
git commit -m "Initial commit: Hype Spot Shopify Theme"

# Renombra la rama a main
git branch -M main
```

**Opción A - Si ya tienes un repositorio en GitHub:**

```bash
# Conecta con tu repositorio
git remote add origin https://github.com/TU_USUARIO/hype-spot-theme.git

# Sube los archivos
git push -u origin main
```

**Opción B - Crear repositorio desde terminal (con GitHub CLI):**

```bash
# Instala GitHub CLI si no lo tienes: https://cli.github.com/
gh repo create hype-spot-theme --public --source=. --remote=origin --push
```

**Opción C - Crear manualmente en GitHub:**

1. Ve a: https://github.com/new
2. Nombre del repositorio: `hype-spot-theme`
3. Público o Privado (tu elección)
4. **NO** agregues README, .gitignore ni LICENSE
5. Click en **"Create repository"**
6. Ejecuta en tu terminal:

```bash
git remote add origin https://github.com/TU_USUARIO/hype-spot-theme.git
git push -u origin main
```

### Paso 2: Conectar con Shopify

1. **Abre tu Shopify Admin:**
   ```
   https://admin.shopify.com/store/TU-TIENDA/themes
   ```

2. **Agregar tema desde GitHub:**
   - Click en **"Add theme"** (botón verde en la esquina superior derecha)
   - Selecciona **"Connect from GitHub"**

3. **Autorizar GitHub:**
   - Si es tu primera vez, autoriza Shopify para acceder a tus repos
   - Selecciona tu repositorio: `hype-spot-theme`
   - Rama: `main`
   - Click en **"Connect"**

4. **Espera la sincronización:**
   - Shopify descargará e instalará el tema automáticamente
   - Esto puede tardar 1-2 minutos

5. **Publica el tema:**
   - Una vez instalado, aparecerá en la biblioteca de temas
   - Click en **"Actions"** → **"Publish"**

✅ **¡Listo! Tu tema está activo.**

---

## 🎯 Método 2: Subida Manual (ZIP)

### Paso 1: Crear archivo ZIP

**Desde tu terminal:**

```bash
# Vuelve al directorio padre
cd ..

# Crea el archivo ZIP
zip -r hype-spot-theme.zip shopify-theme/
```

**En Windows (PowerShell):**

```powershell
Compress-Archive -Path shopify-theme\* -DestinationPath hype-spot-theme.zip
```

**En macOS/Linux (Finder/File Manager):**

- Click derecho en la carpeta `shopify-theme`
- Selecciona "Comprimir"

### Paso 2: Subir a Shopify

1. **Ve a tu Shopify Admin:**
   ```
   https://admin.shopify.com/store/TU-TIENDA/themes
   ```

2. **Subir tema:**
   - Click en **"Add theme"**
   - Selecciona **"Upload ZIP file"**
   - Selecciona `hype-spot-theme.zip`
   - Click en **"Upload"**

3. **Publica el tema:**
   - Click en **"Actions"** → **"Publish"**

---

## ⚙️ Configuración Post-Instalación

### 1. Crear las 3 Colecciones Principales

1. Ve a: **Products** → **Collections** → **Create collection**

2. Crea estas colecciones:

**Colección 1: Tecnología**
- Título: `Tecnología`
- Handle: `tecnologia` (importante)
- Tipo: Manual o Automático
- Descripción: "Los gadgets más innovadores"

**Colección 2: Moda**
- Título: `Moda`
- Handle: `moda`
- Descripción: "Estilo y elegancia premium"

**Colección 3: Accesorios**
- Título: `Accesorios`
- Handle: `accesorios`
- Descripción: "El toque final perfecto"

### 2. Agregar Productos

1. Ve a: **Products** → **Add product**

2. Para cada producto:
   - Agrega título, descripción y precio
   - **Sube imágenes** (mínimo 1, recomendado 4)
   - Asigna a una colección
   - Define el tipo de producto (se mostrará como categoría)
   - Activa la disponibilidad

**Ejemplo de producto:**
- Título: "Premium Wireless Headphones"
- Precio: $299.00
- Tipo: "Tecnología"
- Colección: Tecnología
- Stock: Disponible

### 3. Configurar Página de Inicio

1. Ve a: **Online Store** → **Themes**
2. En tu tema activo, click en **"Customize"**
3. Verás 3 secciones principales:

**A) Hero Banner:**
- Sección superior con animaciones
- No requiere configuración adicional

**B) Category Grid:**
- Muestra las 3 categorías automáticamente
- Las categorías enlazan a `/collections/tecnologia`, `/collections/moda`, `/collections/accesorios`

**C) Featured Collection:**
- Click en la sección "Featured Collection"
- En el panel derecho, selecciona una colección
- Ajusta "Productos a mostrar" (recomendado: 8)
- **Importante:** Si no seleccionas una colección, se mostrará un mensaje de error

4. Click en **"Save"** (esquina superior derecha)

### 4. Verificar el Carrito

El carrito lateral está integrado automáticamente. Para probarlo:

1. Ve a tu tienda: `https://tu-tienda.myshopify.com`
2. Click en cualquier producto
3. Click en "Agregar al carrito"
4. Debería aparecer el carrito lateral

---

## 🎨 Personalización Opcional

### Cambiar Colores

1. Ve a: **Online Store** → **Themes** → **Actions** → **Edit code**
2. Abre: `layout/theme.liquid`
3. Busca la sección `:root` y modifica:

```css
:root {
  --color-accent: 251, 146, 60;  /* Color naranja principal */
  --color-text: 17, 24, 39;      /* Color de texto */
}
```

### Cambiar Logo

1. Ve a: **Online Store** → **Themes** → **Customize**
2. Click en la sección "Header"
3. En el panel derecho, busca "Logo"
4. Sube tu imagen de logo

### Agregar Favicon

1. Ve a: **Settings** → **Files**
2. Sube tu favicon (32x32px PNG)
3. Copia la URL
4. Ve a: **Online Store** → **Themes** → **Customize**
5. Click en el ícono de configuración (⚙️) en la esquina
6. Busca "Favicon" y pega la URL

---

## ✅ Checklist de Instalación

Marca cada paso a medida que lo completes:

- [ ] Tema subido a GitHub o instalado vía ZIP
- [ ] Tema publicado y activo
- [ ] 3 colecciones creadas (Tecnología, Moda, Accesorios)
- [ ] Al menos 8 productos agregados con imágenes
- [ ] Productos asignados a colecciones
- [ ] Página de inicio configurada con colección featured
- [ ] Carrito probado y funcionando
- [ ] Logo personalizado (opcional)
- [ ] Colores ajustados (opcional)

---

## 🐛 Problemas Comunes

### "Template file not found"

**Causa:** Faltan archivos en la instalación.

**Solución:**
1. Verifica que todos los archivos se subieron correctamente
2. Asegúrate de que `layout/theme.liquid` existe
3. Re-sube el tema

### Colección no muestra productos

**Causa:** Colección vacía o sin productos asignados.

**Solución:**
1. Ve a la colección en Shopify Admin
2. Verifica que tenga productos asignados
3. Asegúrate de que los productos estén disponibles

### El carrito no se abre

**Causa:** JavaScript no cargado correctamente.

**Solución:**
1. Limpia el caché del navegador (Ctrl + Shift + Delete)
2. Verifica que `snippets/cart-drawer.liquid` existe
3. Verifica que está incluido en `layout/theme.liquid`

### Imágenes rotas

**Causa:** URLs de imágenes incorrectas o productos sin imágenes.

**Solución:**
1. Asegúrate de que cada producto tenga al menos 1 imagen
2. Las imágenes deben estar en formato JPG, PNG o WEBP

---

## 📞 Soporte

¿Necesitas ayuda? Contacta:

- **Email:** hypespotclient@gmail.com
- **Documentación:** Ver `README.md`

---

## 🎉 ¡Felicidades!

Tu tienda Hype Spot está lista para vender. Ahora puedes:

1. Agregar más productos
2. Personalizar el diseño
3. Configurar métodos de pago
4. Activar tu dominio personalizado

**¡Mucha suerte con tu tienda! 🚀**
