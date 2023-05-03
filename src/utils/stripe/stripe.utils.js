import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
