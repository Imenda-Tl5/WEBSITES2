import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "./CheckOut.css";
import { FoodContext } from "../FoodContext";

const stripePromise = loadStripe("pk_test_51QnxlO4cddLyakvKkjcX9wABbqcgiHfXFXeYB4eaTwHxGxc1GVNlmuAuxco5U5UsECji6bJ3sV7YSpIBcNWaspeS00oKnD3oS7");

const CheckoutForm = ({ totalAmount }) => {
  const { setPay } = useContext(FoodContext);
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError("Stripe has not loaded yet.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount }),
      });

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        alert("Payment successful!");
      }
    } catch (err) {
      setError("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="stripe">
      <div className="payment-container">
        <div className="header">
          <div className="payment-types">
            <h2>Debit</h2>
            <span>/</span>
            <h2>Credit</h2>
          </div>
          <h2  className="closed"onClick={() => setPay(false)}>X</h2>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="card-input">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": { color: "#aab7c4" },
                    padding: "10px",
                  },
                  invalid: { color: "#9e2146" },
                },
              }}
            />
          </div>
          <span>
            <h3>Name :</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </span>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

const Checkout = ({ totalAmount }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm totalAmount={totalAmount} />
  </Elements>
);

export default Checkout;
