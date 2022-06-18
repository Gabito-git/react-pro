import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  // No permite que el contador baje de 0
  const increaseBy = ( value: number ) => {
    setCounter( counter => Math.max( counter + value, 0)  );
  } 

  return {
    counter,
    increaseBy
  }
}