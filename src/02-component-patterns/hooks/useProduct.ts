import { useEffect, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface UseProductArgs{
  onChange?: ( args: OnChangeArgs) => void;
  product: Product, 
  value?: number
}

export const useProduct = ({ onChange, product, value=0}: UseProductArgs) => {
  const [counter, setCounter] = useState( value );

  useEffect(() => {
     setCounter( value );
  }, [value])
  
  // No permite que el contador baje de 0
  const increaseBy = ( value: number ) => {

    const newValue =Math.max( counter + value, 0)  
    setCounter( newValue);

    onChange && onChange( { product, count: newValue } );
  } 

  return {
    counter,
    increaseBy
  }
}