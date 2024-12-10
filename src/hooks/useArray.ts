import { useState } from "react";

import { usePrevious } from "react-use";

export default function useArray<T>(defaultValue: T[]) {
  const [array, setArray] = useState(defaultValue);
  const prevArray = usePrevious(array);

  const push = (element: T) => {
    setArray((e) => [...e, element]);
  };
  const unshift = (element: T) => {
    setArray((e) => [element, ...e]);
  };
  const filter = (callback: T) => {
    setArray((e) => e.filter(callback));
  };
  const update = (index: number, newElement: T) => {
    setArray((e) => [...e.slice(0, index), newElement, ...e.slice(index + 1, e.length)]);
  };
  const remove = (index: number) => {
    setArray((e) => [...e.slice(0, index), ...e.slice(index + 1, e.length)]);
  };
  const clear = () => {
    setArray([]);
  };

  return {
    array,
    set: setArray,
    prevArray,
    push,
    unshift,
    filter,
    update,
    remove,
    clear,
  };
}
