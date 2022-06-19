import { useContext, CSSProperties } from "react";

import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props{
  img?: string;
  className?: string;
  style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {

  const { product:{ img:productImage } } = useContext(ProductContext);

  let imageToShow: string;

  if( img ){
    imageToShow = img;
  }else if( productImage ){
    imageToShow = productImage;
  }else{
    imageToShow = noImage;
  }

  return (
    <img 
      className={ `${styles.productImg} ${className}` } 
      src={ imageToShow } 
      alt='Product'
      style={ style }
    />
  )
}