import { loadStripe } from "@stripe/stripe-js";

const publishableKey = `${import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY}`
export const stripePromise = loadStripe(publishableKey)
