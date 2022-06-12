import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

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
const lazy1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );
const lazy2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2') );
const lazy3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3') );


/**
 * Array de rutas. Se construyen dinámicamente en el archivo Navitagion.tsx
 */

export const routes: Route[] =[
  {
    to:'/lazy1',
    path:'/lazy1',
    Component: lazy1,
    name: 'Lazy-1'
  },
  {
    to:'/lazy2',
    path:'/lazy2',
    Component: lazy2,
    name: 'Lazy-2'
  },
  {
    to:'/lazy3',
    path:'/lazy3',
    Component: lazy3,
    name: 'Lazy-3'
  },
]