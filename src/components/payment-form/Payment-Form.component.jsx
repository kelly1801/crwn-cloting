import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { buttonTypeClasses } from "../buttons/button.jsx";
import { FormContainer, PaymentFormContainer } from "./payment-form-styles.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/Cart/cart.selector.js";
import { selectCurrentUser } from "../../store/user/user.selector.js";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
const [isProcessingPayment, setIsProcessingPayment ] = useState(false)
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true)

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100}),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;


    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false)
    if (paymentResult.error) {
      alert(paymentResult.err);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successfull");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button isLoading={isProcessingPayment} buttonType={buttonTypeClasses.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}
