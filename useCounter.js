import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    // setCounter(counter + value);
    setCounter((current) => current + value); // Esta línea la hizo por el testing. Sin testing, utilizar la de arriba comentada que está OK
  };

  const decrement = (value = 1) => {
    // counter >= 1 && setCounter(counter - 1); -> Alternativa A para que el valor mínimo sea 0
    // if ( counter === 0) return; -> Alternativa B para que el valor mínimo sea 0

    // setCounter(counter - value);
    setCounter((current) => current - value); // Esta línea la hizo por el testing. Sin testing, utilizar la de arriba comentada que está OK
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, increment, decrement, reset };
};
