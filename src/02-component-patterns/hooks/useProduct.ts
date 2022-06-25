import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface UseProductArgs{
  onChange?: ( args: OnChangeArgs) => void;
  product: Product, 
  value?: number
}

export const useProduct = ({ onChange, product, value=0}: UseProductArgs) => {
  const [counter, setCounter] = useState( value );

  // Si se le está pasando el onChange, quiere
  // decir que el componente está siendo controladoß
  const isControlled = useRef(!!onChange);

  useEffect(() => {
     setCounter( value );
  }, [value])
  
  // No permite que el contador baje de 0
  const increaseBy = ( value: number ) => {

    /**
     * Si existe onChange, quiere decir que la tarjeta está siendo
     * controlada, por esta razon, se busca que el estado se controle
     * desde afuera. Aca, solo se le enviará, en ese caso, el +1 o -1 
     * que envían los botones
     */
    if(isControlled.current){
      return onChange!({ count: value, product });
    }

    const newValue =Math.max( counter + value, 0)  
    setCounter( newValue);

    onChange && onChange( { product, count: newValue } );
  } 

  return {
    counter,
    increaseBy
  }
}