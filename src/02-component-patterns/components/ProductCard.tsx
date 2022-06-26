/**
 * 1. Tenemos el componente creado común y corriente. 
 *  con sus campos de imagen, titulo, etc
 * 2. Cada campo, (imagen, titulo, botones) se 
 *  separó en pequeños sub componentes dentro de este
 *  mismo archivo. (ver ejemplo abajo comentado)
 * 3. En este punto, cada sub componente es renderizado
 *  dentro del padre, por lo que es este quien le pasa
 *  los Props
 * 4. Se modifica la interfaz de las props del componente
 *  padre para recibir children. De esta manera, los sub
 *  componentes ahora se renderizan como children del padre
 *  (HOC) desde la shopping page.
 * 5. El padre es quien recibe el producto y a traves de
 *  context, le entrega la data necesaria a todos sus hijos
 * 6. Refactorizar separando los sub componentes e interfaces
 *  en sus propios archivos
 */


/**
 * Este tipo de importación se puede hacer gracias 
 * al .module..., esto es manejado por React. De lo contrario,
 * se podria importar import '../styles/styles.css' y se usarían 
 * sus clases, pero no se podría usar como modulo
 */

// importación desde assets

import { createContext, ReactElement, CSSProperties} from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextInterface, Product, OnChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

// Ejemplo de sub componente

// export const ProductImage = ({ img = '' }) => {
//   return (
//     <img className={ styles.productImg } src={ img ? img: noImage } alt='Product'/>
//   )
// }


export const ProductContext = createContext({} as ProductContextInterface);


/**
 * Renderiza la imagen que trae el producto, pero si
 * el usuario envía un prop imagen, es esa la que se 
 * renderiza. Si no vienen ninguna de las dos, renderiza
 * el noImage que tenemos importado arriba
 */


// interface ProductButtonsProps{
//   counter   : number;
//   increasyBy: (value: number) => void
// }

export interface Props{
  className?: string;     // Introducido en el capitulo de extensible styles
  product: Product;
  children?: ReactElement | ReactElement[]; // Un componente o varios
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number
}


export const ProductCard = ( { children, product, className, style, onChange, value }: Props) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value });

  const { Provider } = ProductContext;

  return (
    <Provider value={ { counter, increaseBy, product } }>
      <div 
        className={ `${styles.productCard} ${className}` }
        style={style}
      >
        {/* Uso de imagen desde Public */}
        {/* <img className={ styles.productImg } src='./coffee-mug.png' alt='Coffe Mug'/> */}

        {/* Uso de imagen desde assets */}
        {/* <img className={ styles.productImg } src={ noImage } alt='Coffe Mug'/> */}
        
        {/* Proceso inicial, luego se refactorizó */}
        {/* <ProductImage img={ product.img }/>

        <ProductTitle title={ product.title }/>

        <ProductButtons counter={ counter } increasyBy={ increasyBy } /> */}
        { children }

      </div>
    </Provider>
  )
}


