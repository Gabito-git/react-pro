
import {  ProductCard } from "../components";
import { ProductImage, ProductTitle, ProductButtons } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';

/**
 * Normalmente, el estado general del ProductCard, es controlado desde el hook
 *  useProduct. Este hook expone la función increaseBy y el count. Estos datos 
 * son pasados via context al sub componente botones y es alli en donde se ejecuta
 * la función para aumentar (increaeBy(1)) o disminuir (increaseBy(-1)). Esta función
 * setea el estado que cambia el count.
 * 
 * El patrón consiste en brindar una manera de brindarle al componente la forma de 
 * tomar un valor para su estado desde el exterior y a su vez, emitir eventos cuando 
 * su estado interno cambie, similar a la forma en como funciona el input en react, con 
 * el onChange y el value.
 * 
 * Dos formas de implementar el patrón:
 * 
 * 1. Tenemos el componente dentro de una pagina central, en este caso, a manera de listado
 *  de productos de un e-commerce. Esta pagina tiene un estado que maneja el carrito de compras, 
 *  una sección mapeada de productos disponibles una sección mapeada de productos en el carrito
 *  que estará controlada por el estado descrito.
 *  
 *  Tenemos a su vez, la función onProductCountChange, (presente en useShoppingCart), la cual
 *  se pasa por el parámetro onChange del componente. Esta función es ejecuta dentro del useProduct
 *  una vez se ejecuta el increaseBy (al manipular los botones). Esta función recibe el contador 
 *  que se seteó y el producto que pertenece al componente en cuestión.
 *  
 *  Al ser ejecutada esta función, se seteará el estado general del e-commerce con el producto 
 *  que se escogió y el contador, asi, el producto dibujará un componente en la sección de shopping
 *  cart y el contador se pasará por el parametro value del mismo cambiando su estado. Ahora, si 
 *  se realiza un cambio directamente en el componente del shopping cart mediante sus botones, esto
 *  ejecutará el increaseBy (función interna del componente), su estado se seteará y en adición se
 *  ejecutará la función on Change que cambiará el estado global de la pagina, cuyo contador se
 *  pasará por el parametro value a su componente correspondiente (sección de productos disponibles)
 * 
 *  Asi tenemos un enlazamiento. El componente recibe un parametro opcional value que controla su 
 *  estado y adicional a eso, recibe una funcion a traves del parametro opcional onchange para 
 *  completar el lazo.
 * 
 *  En esta forma, al oprimir un botón, se seteará el estado privado del componente haciendo 
 *  cambiar su contador y se ejecutará una función (pasado por onChange) la cual busca cambiar 
 *  el estado del o de los componentes enlazados. La siguiente forma del patron, no setea el 
 *  estado privado al manipular los botones, solo al recibir un cambio en el value
 *  
 *  2. Al manipular los botones, la función increaseBy solamente se limitará a ejecutar el 
 *     onChange con el producto que se le esta pasando al componente en cuestion y un +1 si se
 *     oprimió el + o un -1 si se oprimió el -. 
 * 
 *     De esta manera, el estado del componente solo se seteará al haber un cambio en el 
 *     parametro value mas no directamente en el increaseBy al dar click en los botones
 *  
 */


export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{display: 'flex', flexWrap: 'wrap'}}>

        {
          products.map( product => (
            <ProductCard 
              key={ product.id }
              product={ product }
              className="bg-dark text-white"
              onChange={ onProductCountChange }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage className="custom-image"/>
              <ProductTitle />
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
          ) )
        }
      </div>

      { /* Esta es la zona en donde se muestran los productos que 
      vamos adquiriendo */ }
      <div className="shopping-cart">

        {
          Object.entries( shoppingCart ).map( ([key, product]) =>(
            <ProductCard 
              key={ key }
              product={ product }
              className="bg-dark text-white"
              style={{ width: '100px' }}
              value={ product.count }
              onChange={ onProductCountChange }
            >
              <ProductImage className="custom-image"/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
          ))
        }

      </div>

    </div>
  )
}
