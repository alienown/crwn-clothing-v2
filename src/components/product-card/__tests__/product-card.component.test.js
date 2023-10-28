import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.utils';
import ProductCard from '../product-card.component';

describe('Product Card tests', () => {
  test('should add the product item when add to cart button is clicked', () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'test',
      name: 'Item A',
      price: 2137,
      quantity: 1,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtomElement = screen.getByText(/add to cart/i);

    fireEvent.click(addToCartButtomElement);

    expect(store.getState().cart.cartItems).toEqual([mockProduct]);
  });
});
