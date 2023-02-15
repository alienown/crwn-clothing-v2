import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

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

const calculateCartTotal = (cartItems) => {
  const newCartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

  return newCartTotal;
};

const calculateCartCount = (cartItems) => {
  const newCartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  return newCartCount;
};
