import { memo } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

export type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default memo(CartItem);
