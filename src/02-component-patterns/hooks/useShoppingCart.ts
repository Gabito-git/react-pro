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

      // Si es la primera vez que se llama esta función, quiere
      // decir que el producto no existe en el carrito, por eso el ||
      const productInCart: ProductInCart = oldShoppingCart[ product.id ] || {...product, count:0};

      // Si al sumarle el +1 o -1 que llega, el contador es > 0
      // proceda a sumarselo al count del productInCart y setee el estado
      if(Math.max( productInCart.count + count, 0 ) > 0){
        productInCart.count += count;
        return{
          ...oldShoppingCart,
          [ product.id ]: productInCart
        }
      }

      // Si no entró al if, significa que la acción del botón llevó 
      // a cero el contador, o que ya estaba en cero. Por lo cual, 
      // se borra del carrito 
      const {[product.id]: toDelete, ...rest} = oldShoppingCart;
      return {...rest}

      /**
       * Manejo del estado sin tener en cuenta el control
       * desde el exterior. Explicación al inicio de este archivo
       */

      // Elimina producto del carrito si el contador esta en cero
      //   if( count === 0 ){
      //     const { [product.id]:toDelete, ...rest } = oldShoppingCart;
      //     return rest;
      //   }

      //   return{
      //     ...oldShoppingCart,
      //     [product.id]: { ...product, count }
      //   }
      }
    )
    
  }

  return {
    shoppingCart,
    onProductCountChange
  }

}