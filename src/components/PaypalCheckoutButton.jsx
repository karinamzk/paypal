import React, { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const PaypalCheckoutButton = (props) => {
    const { product } = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
        setPaidFor(true);
    }

    // if (paidFor) {
    //     alert("Thank you for purchasing")
    // }

    if (error) {
        alert(error);
    }

    return (
        <PayPalScriptProvider>
            <PayPalButtons
                onClick={(data, actions) => {
                    const hasAlreadyBoughtCourse = false;
                    if (hasAlreadyBoughtCourse) {
                        setError("You Already bough this course");
                        return actions.reject();
                    } else {
                        return actions.resolve();
                    }
                }}

            createOrder = {(data, actions) => {
                    return actions.order.create({
                        purchase_units:[
                            {
                                description: product.description,
                                amount: {
                                    value: product.price,
                                },
                            },
                        ],
                    });
                }}
                onApprove= { async (data, action) => {
                    const order = await action.order.capture()
                    // .then((response) => response.json())
                    .then((details) => {
                    //   // This function shows a transaction success message to your buyer.+ details.payer.name.given_name);
                      alert('Transaction completed by ' + details.payer.name.given_name + data.orderID);
                    });;
                    console.log("order", order)

                    handleApprove(data.orderID);
                }}
                onCancel={() => {}}
                onError={(err) => {
                    setError(err);
                    console.log("Paypal Checkout onError", err);
                }}
                />
    </PayPalScriptProvider>
    )
}

export default PaypalCheckoutButton