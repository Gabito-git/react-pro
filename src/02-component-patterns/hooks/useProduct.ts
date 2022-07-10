import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface UseProductArgs{
  onChange?: ( args: OnChangeArgs) => void;
  product: Product, 
  value?: number,
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value=0, initialValues}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>( initialValues?.count || value );

  const isMounted = useRef(false);

  useEffect(() => {
     isMounted.current && setCounter( value );        // Permite que en el montado no se setee el value, permitiendo asi
  }, [value])                                         // que initialValues.count sea en realidad el valor inicial

  useEffect(() => {
    isMounted.current = true;
  }, [])
  
  
  // No permite que el contador baje de 0
  const increaseBy = ( value: number ) => {

    let newValue = Math.max( counter + value, 0);
    if( initialValues?.maxCount ) newValue = Math.min( newValue, initialValues.maxCount );

    setCounter( newValue );

    onChange && onChange( { product, count: newValue } );
  } 

  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    
    increaseBy,
    reset
  }
}