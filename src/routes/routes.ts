import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";


/**
 * Para poder emplear LazyLoad, el componente debe ser exportado de manera 
 * default ( se puede exportar tambien de manera directa, es decir, las dos al mismo tiempo)
 */

type JSXComponent = () => JSX.Element

// El OR permite emplear lazy components o componentes tradicionales
interface Route{
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

// Renombrar chunks
const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout') );

/**
 * Array de rutas. Se construyen dinámicamente en el archivo Navitagion.tsx
 * Todas las subrutas /lazyload/* se cargarán conjuntamente de manera lazy una vez se 
 * acceda al modulo lazyload, es decir, una vez se ingrese al modulo, todas las 
 * subrutas estarán disponibles
 */

export const routes: Route[] =[
  {
    to:'/lazyload/',
    path:'/lazyload/*',     //(*) Todo lo que pase por esta ruta sera procesado por este path
    Component: LazyLayout,
    name: 'LazyLayout'
  },
  {
    to:'/no-lazy',
    path:'/no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },

]