import React, { useState } from 'react';

function SubscriptionForm({}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Assuming you have some code here to handle subscription
    // You can add an API call or any other logic here
    // Once the subscription is successful, set subscribed state to true
    setSubscribed(true);
  };

  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>
      {subscribed ? (
        <div>
          <p>Thank you for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}

export default SubscriptionForm;
