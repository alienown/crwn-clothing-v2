import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.utils';
import Navigation from '../navigation.component';
import { signOutStart } from '../../../store/user/user.action';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Navigation tests', () => {
  test('should render sign in link and not sign out link if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signOutElement = screen.queryByText(/sign out/i);
    const signInElement = screen.getByText(/sign in/i);

    expect(signOutElement).toBeNull();
    expect(signInElement).toBeInTheDocument();
  });

  test('should render sign out link and not sign in link if there is currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutElement = screen.getByText(/sign out/i);
    const signInElement = screen.queryByText(/sign in/i);

    expect(signOutElement).toBeInTheDocument();
    expect(signInElement).toBeNull();
  });

  test('should render cart dropdown if isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const emptyCartTextElement = screen.getByText(/your cart is empty/i);

    expect(emptyCartTextElement).toBeInTheDocument();
  });

  test('should not render cart dropdown if isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const emptyCartTextElement = screen.queryByText(/your cart is empty/i);

    expect(emptyCartTextElement).toBeNull();
  });

  test('should dispatch signOutStart action when clicking on the sign out link', async () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutElement = screen.getByText(/sign out/i);

    fireEvent.click(signOutElement);

    expect(mockDispatch).toBeCalledWith(signOutStart());
  });
});
