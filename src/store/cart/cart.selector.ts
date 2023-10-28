import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CartState } from './cart.reducer';
import { CartItem } from './cart.types';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector([selectCartReducer], (cart) => {
  console.log(cart);
  return cart.cartItems;
});

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  calculateCartCount(cartItems)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  calculateCartTotal(cartItems)
);

const calculateCartTotal = (cartItems: CartItem[]) => {
  const newCartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

  return newCartTotal;
};

const calculateCartCount = (cartItems: CartItem[]) => {
  const newCartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  return newCartCount;
};
