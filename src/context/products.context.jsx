import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
import SHOP_DATA from '../shop-data';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
