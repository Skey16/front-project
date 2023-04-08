import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const CheckoutPage = ({clearCart }) => {
  const [expiryDate, setExpiryDate] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar que la fecha de vencimiento no ha llegado
    const [expiryMonth, expiryYear] = expiryDate.split("/");
    const today = new Date();
    const expiry = new Date(parseInt(expiryYear), parseInt(expiryMonth) - 1, 1);
    if (expiry < today) {
      alert("La tarjeta ha expirado. Por favor, ingrese otra tarjeta.");
      return;
    }
    // Aquí puedes validar los datos del formulario antes de redirigir
    clearCart();// Borra los elementos del carrito en caso de no funcionar eliminar esta linea
    history.push("/");
  };

  const handleInputChange = (event) => {
    setExpiryDate(event.target.value);
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber"  required pattern="[0-9]{16,18,20}" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" required pattern="(0[1-9]|1[0-2])\/[0-9]{4}" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv"  required onChange={handleInputChange} />
        </div>
        <button type="submit" className="checkout-btn">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
