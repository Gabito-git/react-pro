import { ReactElement } from "react";

export interface ProductCardProps{
  product: Product;
  children?: ReactElement | ReactElement[]   // Un componente o varios
}

export interface Product{
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextInterface{
  counter: number;
  increaseBy: ( value: number ) => void;
  product: Product
}

// Estos props se encontraron pasando el mouse por encima
// del product card exportando en el components/index.ts.
// Alli no que se hizo fue agregarle las propiedades mediante
// Object.assign
export interface ProductCardHOCProps{
  ({ children, product }: ProductCardProps): JSX.Element;     // Se refiere al ProductCard
  Title: ({ title }: {title?: string | undefined}) => JSX.Element;
  Image: ({ img }: {img?: string | undefined;}) => JSX.Element;
  Buttons: () => JSX.Element;
}
