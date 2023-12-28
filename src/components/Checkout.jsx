import React from 'react'
import ProductImage from "../imagens/product.jpg"
import "./style.css"
import PaypalCheckoutButton from "./PaypalCheckoutButton"

function Checkout() {
  const product = {
    description: "Notebook Intel",
    price: 50,
  };
  return (
    <div className="checkout App">
      <h1>PayPal Checkout</h1>
      <p className="checkout-title">
        Design and Code React PayPal Checkout Procedure
      </p>
      <p className="checkout-description">
      Notebook Intel
      </p>
      <h1 className="checkout-price">$50</h1>
      <img className="product-image" src={ProductImage} alt="Product Image" />
      <div className="separator"></div>
      <div className="paypal">
        <p className="checkout-title">PAY WITH PAYPAL</p>
        <div className="paypal-button-container">
          <PaypalCheckoutButton product={product} />
        </div>
      </div>
    </div>
  )
}

export default Checkout