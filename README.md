# 🎮 Pokédex React - Proyecto de Portafolio Profesional

Una aplicación web moderna y completa de Pokédex construida con React, que demuestra habilidades avanzadas de desarrollo frontend, gestión de estado, y experiencia de usuario.

![Pokédex React](https://img.shields.io/badge/React-19.0+-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.0+-646CFF?style=for-the-badge&logo=vite)

## ✨ **Características Principales**

### 🎨 **Tema Dinámico**
- **Modo Claro/Oscuro** con interruptor en tiempo real
- **Persistencia** de preferencias en localStorage
- **Transiciones suaves** entre temas
- **Colores adaptados** para ambos modos

### ⭐ **Sistema de Favoritos**
- **Marcado de favoritos** con estrellas interactivas
- **Persistencia local** automática
- **Filtro exclusivo** de favoritos
- **Contador en tiempo real**

### 🔍 **Búsqueda y Filtros Avanzados**
- **Búsqueda por nombre** en tiempo real
- **Filtros por tipo** de Pokémon con API directa
- **Combinación inteligente** de filtros
- **Resultados instantáneos** optimizados

### 📊 **Paginación Robusta**
- **Sistema de páginas** clásico y eficiente
- **Navegación inteligente** con botones de primera/última página
- **Indicadores visuales** de página actual
- **Scroll automático** al cambiar de página

### 📈 **Detalles Completos**
- **Estadísticas base** con gráficos de radar interactivos
- **Información de habilidades** con indicadores de habilidades ocultas
- **Tipos y colores** dinámicos y oficiales
- **Modal interactivo** con navegación completa

### 🧬 **Línea Evolutiva Interactiva**
- **Visualización completa** de cadenas evolutivas
- **Navegación por clic** en Pokémon de evolución
- **Indicador del Pokémon actual** con anillo rojo
- **Carga inteligente** de nuevos Pokémon automáticamente

### 📱 **Experiencia de Usuario**
- **Diseño responsive** para todos los dispositivos
- **Animaciones fluidas** y transiciones
- **Estados de carga** informativos
- **Manejo de errores** elegante

## 🚀 **Funcionalidades Avanzadas**

### 🎯 **Filtros Inteligentes**
- **Filtro por tipo** con botones visuales y colores oficiales
- **Filtro por favoritos** independiente
- **Búsqueda combinada** con filtros
- **Limpieza automática** de filtros

### 📊 **Estadísticas de Colección**
- **Contador total** de Pokémon
- **Contador de favoritos**
- **Información de paginación**
- **Estado contextual** de filtros

### 🔄 **Gestión de Datos**
- **Botón de recarga** flotante
- **Reintento automático** en errores
- **Carga optimizada** por páginas
- **Cache inteligente** de datos

### 🎨 **Componentes Reutilizables**
- **Spinner personalizable** con múltiples variantes (pokeball, dots, ring)
- **Paginación avanzada** con navegación completa
- **Filtros modulares** para diferentes criterios
- **Estadísticas dinámicas** contextuales

### 🌟 **Navegación Evolutiva**
- **Clic en evolución** para cambiar Pokémon
- **Indicadores visuales** del Pokémon actual
- **Carga automática** de nuevos Pokémon
- **Transiciones suaves** entre cambios

## 🛠️ **Tecnologías Utilizadas**

- **React 19** - Biblioteca de interfaz de usuario
- **JavaScript ES6+** - Lenguaje de programación moderno
- **Tailwind CSS 4** - Framework de CSS utilitario
- **Vite** - Herramienta de construcción rápida
- **Recharts** - Biblioteca de gráficos para estadísticas
- **PokeAPI** - API pública de Pokémon

## 📦 **Instalación y Uso**

### **Prerrequisitos**
- Node.js 18.0 o superior
- npm o yarn

### **Instalación**
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/pokedex-react.git
cd pokedex-react

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

### **Variables de Entorno**
```bash
# Crear archivo .env (opcional)
VITE_API_BASE_URL=https://pokeapi.co/api/v2
```

## 🎮 **Cómo Usar la Aplicación**

### **Navegación Básica**
1. **Explorar Pokémon**: Navega por las páginas usando la paginación
2. **Cambiar tema**: Usa el interruptor sol/luna en la cabecera
3. **Marcar favoritos**: Haz clic en las estrellas de las tarjetas
4. **Ver detalles**: Haz clic en cualquier tarjeta de Pokémon

### **Búsqueda y Filtros**
1. **Buscar por nombre**: Escribe en la barra de búsqueda
2. **Filtrar por tipo**: Selecciona tipos en el filtro de tipos
3. **Ver favoritos**: Haz clic en el botón "Favoritos"
4. **Limpiar filtros**: Usa el botón "Limpiar Filtros"

### **Funcionalidades Avanzadas**
1. **Estadísticas**: Revisa la información en la parte inferior
2. **Recargar datos**: Usa el botón flotante de recarga
3. **Navegación en modal**: Usa las flechas para cambiar Pokémon
4. **Teclas de acceso**: ESC para cerrar, flechas para navegar

### **Línea Evolutiva**
1. **Abrir cualquier Pokémon**: Haz clic en una tarjeta
2. **Ver evolución**: Desplázate hacia abajo en el modal
3. **Hacer clic en evolución**: Haz clic en Charmeleon, Charizard, etc.
4. **Cambio automático**: El modal cambia al nuevo Pokémon

## 🏗️ **Arquitectura del Proyecto**

```
pokedex-react/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Cabecera con tema y logo
│   ├── SearchBar.jsx   # Barra de búsqueda y filtros
│   ├── TypeFilter.jsx  # Filtros por tipo con carrusel
│   ├── PokemonGrid.jsx # Grid de tarjetas de Pokémon
│   ├── PokemonCard.jsx # Tarjeta individual de Pokémon
│   ├── PokemonModal.jsx # Modal de detalles completo
│   ├── EvolutionChain.jsx # Línea evolutiva interactiva
│   ├── Pagination.jsx  # Sistema de paginación
│   ├── Spinner.jsx     # Indicadores de carga
│   ├── TypeBadge.jsx   # Badges de tipo
│   ├── CollectionStats.jsx # Estadísticas de colección
│   └── ReloadButton.jsx # Botón de recarga
├── contexts/           # Contextos de React
│   └── ThemeContext.jsx # Gestión del tema
├── hooks/              # Hooks personalizados
│   └── useFavorites.js # Lógica de favoritos
├── services/           # Servicios de API
│   └── pokeapi.js      # Cliente de PokeAPI extendido
├── constants.js        # Constantes y colores de tipos
├── App.jsx            # Componente principal
└── index.jsx          # Punto de entrada
```

## 🎯 **Características Técnicas Destacadas**

### **Gestión de Estado**
- **Context API** para tema global
- **Hooks personalizados** para lógica reutilizable
- **Estado local** optimizado por componente
- **Persistencia automática** en localStorage

### **Optimización de Rendimiento**
- **Lazy loading** de imágenes
- **Paginación eficiente** en lugar de scroll infinito
- **Memoización** de filtros y cálculos
- **Carga por demanda** de datos

### **API y Datos**
- **Filtrado por tipo** directo desde PokeAPI
- **Cadenas evolutivas** completas
- **Cache inteligente** de listas de Pokémon
- **Manejo de errores** robusto

### **Accesibilidad**
- **ARIA labels** en elementos interactivos
- **Navegación por teclado** completa
- **Contraste optimizado** para ambos temas
- **Semántica HTML** correcta

### **Responsive Design**
- **Mobile-first** approach
- **Grid adaptativo** para diferentes pantallas
- **Breakpoints** optimizados
- **Touch-friendly** en dispositivos móviles

## 🌟 **Características Únicas**

### **Experiencia Pokémon Auténtica**
- **Colores de tipo** oficiales de Pokémon
- **Gradientes dinámicos** basados en tipos
- **Sprites oficiales** de alta calidad
- **Información completa** de la PokeAPI

### **Interfaz Intuitiva**
- **Transiciones fluidas** en todos los elementos
- **Feedback visual** inmediato en acciones
- **Estados de carga** informativos
- **Mensajes contextuales** claros

### **Funcionalidades de Colección**
- **Sistema de favoritos** persistente
- **Filtros combinables** inteligentes
- **Estadísticas en tiempo real**
- **Gestión de estado** avanzada

### **Navegación Evolutiva**
- **Clic directo** en Pokémon de evolución
- **Indicadores visuales** claros
- **Carga automática** de nuevos datos
- **Experiencia fluida** sin recargas

## 🚀 **Roadmap Futuro**

### **Próximas Características**
- [ ] **Comparador de Pokémon** lado a lado
- [ ] **Equipos personalizados** con roles
- [ ] **Historial de búsquedas** recientes
- [ ] **Exportar favoritos** a archivo
- [ ] **Modo offline** con PWA
- [ ] **Notificaciones** de nuevos Pokémon
- [ ] **Búsqueda por estadísticas** específicas
- [ ] **Filtros por generación** de Pokémon

### **Mejoras Técnicas**
- [ ] **Testing completo** con Jest y React Testing Library
- [ ] **Storybook** para documentación de componentes
- [ ] **CI/CD pipeline** automatizado
- [ ] **Bundle analyzer** para optimización
- [ ] **Lighthouse** score 100%
- [ ] **TypeScript** para mejor tipado
- [ ] **PWA** con service workers

## 🤝 **Contribuir**

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 **Agradecimientos**

- **PokeAPI** por proporcionar la API gratuita
- **Tailwind CSS** por el framework de CSS
- **React Team** por la increíble biblioteca
- **Comunidad Pokémon** por la inspiración

## 📞 **Contacto**

- **GitHub**: [@Merimer98](https://github.com/Merimer08)
- **LinkedIn**: [marialolu](https://linkedin.com/in/marialolu/)
- **Portfolio**: [tu-portfolio.com](https://merimer08.github.io/)

---

⭐ **Si te gusta este proyecto, ¡dale una estrella en GitHub!**

