import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key:string]:ProductInCart }>({});

  /** 
   * Esta función se pasa en el parametro onChange del ProductCard.
   * Esta es ejecutada con los argumentos (product y count) una vez
   *  el contador del componente es manipulado, esto se da en el custom
   *  hook useProduct
   */
  const onProductCountChange = ({ product, count }: { product: Product, count: number }) => {

    setShoppingCart( oldShoppingCart =>{

      //Elimina producto del carrito si el contador esta en cero
        if( count === 0 ){
          const { [product.id]:toDelete, ...rest } = oldShoppingCart;
          return rest;
        }

        return{
          ...oldShoppingCart,
          [product.id]: { ...product, count }
        }
      }
    )
    
  }

  return {
    shoppingCart,
    onProductCountChange
  }

}