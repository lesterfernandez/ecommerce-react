import { useEffect, useState } from "react";

const useCart = initialValues => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [values, setValues] = useState(cart === null ? initialValues : cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(values));
  }, [values]);

  const setCart = item => {
    setValues(c => [...c, item]);
  };

  const clearCart = () => {
    setValues([]);
    localStorage.setItem("cart", null);
  };

  return [
    values,
    newItem => {
      setCart(newItem);
    },
    clearCart,
  ];
};

export default useCart;
