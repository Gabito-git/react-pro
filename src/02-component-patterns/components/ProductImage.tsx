import { useContext } from "react";

import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export const ProductImage = ({ img = '' }) => {

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
    <img className={ styles.productImg } src={ imageToShow } alt='Product'/>
  )
}