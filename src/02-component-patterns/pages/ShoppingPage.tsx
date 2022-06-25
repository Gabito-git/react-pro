
import {  ProductCard } from "../components";
import { ProductImage, ProductTitle, ProductButtons } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';


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
