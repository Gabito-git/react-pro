
- Rutas con React-router-dom @ 6s

- 01-lazyload/pages/index.ts = exportación de multiples componentes para ser importados luego desde este
mismo archivo

- routes/routes.ts = Array de rutas que es implementado de forma dinamica en routes/navigation.tsx, importación de componentes para ser renderizados de manera lazy (modulos), interfaces y tipos necesarios, renombrado de chunks

- routes/navigation.tsx= Implementación de componente Suspense

- Layout/LazyLayout.tsx = Modulo (posee sub rutas) a cargar de manera lazy. Layout comun a todas las subrutas, navegación y rutas

- pages/NoLazy.tsx = Componente a cargar directamente ( no lazy ) al cargar la appß