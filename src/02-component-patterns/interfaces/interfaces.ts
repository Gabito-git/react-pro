
import { Props as ProductButtonsProps} from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps} from "../components/ProductImage";
import { Props as ProductTitleProps} from "../components/ProductTitle";

export interface Product{
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextInterface{
  counter: number;
  increaseBy: ( value: number ) => void;
  product: Product,
  maxCount?: number
}

// Estos props se encontraron pasando el mouse por encima
// del product card exportando en el components/index.ts.
// Alli no que se hizo fue agregarle las propiedades mediante
// Object.assign

/**
 * Esta intefaz esta orientada a modelar el nuevo objeto
 * que se armó en components/index.ts al agregarle a ProductCard
 * las propiedades Image, Title y Buttons para poder tener patron
 * ProductCard.image, etc
 * 
 * Como se ve, en sus respectivos campos, describe los componentes
 * ProductImage (Image), ProductTitle(Title) y ProductButtons(Buttons)
 * 
 */
export interface ProductCardHOCProps{
  ({ children, product }: ProductCardProps): JSX.Element;     // Se refiere al ProductCard
  Title   : (Props: ProductTitleProps)   => JSX.Element;
  Image   : (rops: ProductImageProps)    => JSX.Element;
  Buttons : (Props: ProductButtonsProps) => JSX.Element;
}

export interface OnChangeArgs{
  product: Product;
  count: number;
}

export interface ProductInCart extends Product{
  count: number;
}

export interface InitialValues{
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers{
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: ( value:number ) => void;
  reset: () => void;
}