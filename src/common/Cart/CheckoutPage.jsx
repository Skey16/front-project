import React from "react";
import "./style.css";

const CheckoutPage = () => {
return (
<div className="checkout-container">
<h2>Checkout</h2>
<form className="checkout-form">
<div className="form-group">
<label htmlFor="name">Name</label>
<input type="text" id="name" required />
</div>
<div className="form-group">
<label htmlFor="email">Email</label>
<input type="email" id="email" required />
</div>
<div className="form-group">
<label htmlFor="address">Address</label>
<input type="text" id="address" required />
</div>
<div className="form-group">
<label htmlFor="city">City</label>
<input type="text" id="city" required />
</div>
<div className="form-group">
<label htmlFor="country">Country</label>
<input type="text" id="country" required />
</div>
<div className="form-group">
<label htmlFor="cardNumber">Card Number</label>
<input type="text" id="cardNumber" required pattern="[0-9]*" />
</div>
<div className="form-group">
<label htmlFor="expiryDate">Expiry Date</label>
<input type="text" id="expiryDate" required pattern="(0[1-9]|1[0-2])\/[0-9]{4}" />
</div>
<div className="form-group">
<label htmlFor="cvv">CVV</label>
<input type="text" id="cvv" required pattern="[0-9]*" />
</div>
<button type="submit" className="checkout-btn">
Pay Now
</button>
</form>
</div>
);
};

export default CheckoutPage;