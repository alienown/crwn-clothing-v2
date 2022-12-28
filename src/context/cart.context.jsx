import { createContext, useState } from 'react';

export const CartContext = createContext({
  products: [],
  isCartOpen: false,
  setProducts: () => [],
  setIsOpen: () => false,
});

export const CartProvider = ({ children }) => {
  const [ products, setProducts] = useState([]);
  const [ isCartOpen, setIsCartOpen] = useState(false);

  const value = { products, isCartOpen, setProducts, setIsCartOpen };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
