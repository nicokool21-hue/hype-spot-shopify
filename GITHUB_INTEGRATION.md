# 🔗 Integración con GitHub - Hype Spot Theme

Esta guía te ayudará a conectar este tema de Shopify con GitHub en **menos de 5 minutos**.

---

## ✅ Requisitos Previos

- [x] Cuenta de GitHub
- [x] Tienda de Shopify activa
- [x] Carpeta `shopify-theme` descargada

---

## 🚀 Paso 1: Subir el Tema a GitHub

### Opción A: Desde la Terminal (Recomendado)

```bash
# 1. Navega a la carpeta del tema
cd shopify-theme

# 2. Inicializa Git
git init

# 3. Agrega todos los archivos
git add .

# 4. Crea el primer commit
git commit -m "Initial commit - Hype Spot Shopify Theme"

# 5. Crea la rama main
git branch -M main

# 6. Crea un nuevo repositorio en GitHub y conéctalo
# Reemplaza TU_USUARIO con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/hype-spot-shopify.git

# 7. Sube el tema a GitHub
git push -u origin main
```

### Opción B: Usando GitHub Desktop

1. Abre GitHub Desktop
2. Click en **File → Add Local Repository**
3. Selecciona la carpeta `shopify-theme`
4. Click en **Create Repository**
5. Click en **Publish Repository**
6. Nombra el repositorio: `hype-spot-shopify`
7. Click en **Publish Repository**

---

## 🔗 Paso 2: Conectar con Shopify

### 1. Accede a tu Shopify Admin

```
https://admin.shopify.com/store/TU-TIENDA/themes
```

### 2. Agregar Tema desde GitHub

1. Click en el botón **"Add theme"** (esquina superior derecha)
2. Selecciona **"Connect from GitHub"**

### 3. Autorizar GitHub

- Si es la primera vez, autoriza a Shopify para acceder a tu GitHub
- Click en **"Authorize Shopify"**

### 4. Seleccionar Repositorio

- **Repository**: `hype-spot-shopify` (o el nombre que usaste)
- **Branch**: `main`
- Click en **"Connect"**

### 5. Esperar Sincronización

Shopify sincronizará automáticamente el tema (1-2 minutos).

### 6. Publicar el Tema

Una vez sincronizado:
1. En la lista de temas, encuentra "Hype Spot"
2. Click en **"Actions"** → **"Publish"**

✅ **¡Tu tema está activo!**

---

## 📋 Estructura del Repositorio

```
hype-spot-shopify/
├── assets/              ✅ CSS, JS, imágenes
├── config/              ✅ Configuración del tema
├── layout/              ✅ theme.liquid (layout principal)
├── locales/             ✅ Traducciones (ES/EN)
├── sections/            ✅ Secciones reutilizables
├── snippets/            ✅ Componentes pequeños
├── templates/           ✅ Templates de páginas
├── .gitignore           ✅ Archivos ignorados
├── LICENSE              ✅ Licencia MIT
├── README.md            ✅ Documentación principal
└── GITHUB_INTEGRATION.md ✅ Esta guía
```

---

## 🔄 Actualizar el Tema

### Método 1: Push Automático

Cualquier cambio que hagas en el repositorio GitHub se sincronizará automáticamente con Shopify:

```bash
# Hacer cambios en archivos
git add .
git commit -m "Actualización del diseño"
git push origin main
```

Shopify detectará los cambios y actualizará el tema **automáticamente**.

### Método 2: Desde Shopify Admin

También puedes editar desde Shopify y los cambios se sincronizarán con GitHub:

1. **Themes** → Click en tu tema → **"Customize"**
2. Edita lo que necesites
3. Click en **"Save"**
4. Los cambios se guardarán en GitHub automáticamente

---

## ⚠️ Archivos Importantes

### ✅ SIEMPRE incluir en el repositorio:

- `layout/theme.liquid` - Layout principal
- `templates/*.json` - Templates de páginas
- `sections/*.liquid` - Secciones del tema
- `snippets/*.liquid` - Componentes reutilizables
- `assets/*.css` y `assets/*.js` - Estilos y scripts
- `config/settings_schema.json` - Configuración del tema
- `locales/*.json` - Traducciones

### ❌ NUNCA subir a GitHub:

- `config/settings_data.json` - Configuración específica de la tienda
- `.DS_Store` - Archivos del sistema
- `node_modules/` - Dependencias locales

**Nota**: El archivo `.gitignore` ya está configurado para ignorar estos archivos.

---

## 🎯 Configuración Post-Instalación

### 1. Crear las 3 Colecciones Principales

Ve a: **Products → Collections → Create collection**

| Nombre | Handle | Descripción |
|--------|--------|-------------|
| Tecnología | `tecnologia` | Smartphones, laptops, gadgets |
| Moda | `moda` | Ropa, calzado, accesorios |
| Accesorios | `accesorios` | Complementos y lifestyle |

### 2. Agregar Productos

Ve a: **Products → Add product**

**Mínimo recomendado**: 8 productos
- Título descriptivo
- Precio
- 1-4 imágenes de alta calidad
- Tipo de producto
- Asignado a una colección

### 3. Configurar la Homepage

1. Ve a: **Online Store → Themes → Customize**
2. Edita la sección **"Featured Collection"**:
   - Selecciona una colección
   - Ajusta "Productos a mostrar": 8
3. Click **"Save"**

---

## 🎨 Personalizar el Tema

### Cambiar Colores

1. **Online Store → Themes → Customize**
2. Click en **⚙️ Theme settings** (barra lateral)
3. Ve a **"Colors"**
4. Ajusta los colores según tu marca

### Cambiar Logo

1. **Customize** → Click en la sección "Header"
2. Sube tu logo (recomendado: PNG transparente, 120px de alto)
3. **Save**

### Cambiar Fuentes

1. **Customize** → **⚙️ Theme settings**
2. Ve a **"Typography"**
3. Selecciona las fuentes para:
   - Headings (títulos)
   - Body (texto general)

---

## 🔍 Verificación de Integración

### Checklist de GitHub + Shopify

- [ ] Repositorio creado en GitHub
- [ ] Rama `main` configurada
- [ ] Tema conectado en Shopify
- [ ] Primera sincronización completada
- [ ] Tema publicado en la tienda
- [ ] 3 colecciones creadas (Tecnología, Moda, Accesorios)
- [ ] Al menos 8 productos agregados
- [ ] Homepage configurada con colección destacada
- [ ] Logo personalizado (opcional)
- [ ] Colores ajustados (opcional)

---

## 🆘 Solución de Problemas

### Error: "No se puede conectar el repositorio"

**Causa**: Estructura de carpetas incorrecta

**Solución**:
```bash
# Asegúrate de que la estructura sea correcta
ls -la
# Debes ver: layout/, sections/, templates/, config/, etc.
```

### Error: "Theme is invalid"

**Causa**: Falta `layout/theme.liquid` o `config/settings_schema.json`

**Solución**:
```bash
# Verifica que existan estos archivos:
ls layout/theme.liquid
ls config/settings_schema.json
```

### Error: "Branch not found"

**Causa**: La rama no se llama `main`

**Solución**:
```bash
git branch -M main
git push -u origin main
```

### No se sincronizan los cambios

**Solución**:
1. Ve a: **Themes → [Tu tema] → Actions**
2. Click en **"Sync from GitHub"**
3. Espera 1-2 minutos

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Shopify Theme GitHub Integration](https://shopify.dev/docs/themes/tools/github)
- [Shopify Theme Architecture](https://shopify.dev/docs/themes/architecture)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)

### Guías del Tema

- `README.md` - Guía general y características
- `INSTALLATION_GUIDE.md` - Instalación paso a paso
- `QUICKSTART.md` - Inicio rápido (10 minutos)

### Soporte

- **Email**: hypespotclient@gmail.com
- **Issues**: GitHub Issues en tu repositorio

---

## 🎉 ¡Listo!

Tu tema **Hype Spot** está ahora conectado con GitHub y funcionando en Shopify.

### Próximos Pasos:

1. ✅ Agrega más productos
2. ✅ Personaliza colores y logo
3. ✅ Configura redes sociales en el footer
4. ✅ Prueba el carrito y checkout
5. ✅ ¡Empieza a vender!

---

**¿Necesitas ayuda?** Consulta las otras guías o contacta a hypespotclient@gmail.com
