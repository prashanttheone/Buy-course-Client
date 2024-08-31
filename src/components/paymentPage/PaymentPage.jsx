// src/components/PaymentPage.jsx
import React, { useEffect } from 'react';

const PaymentPage = () => {
    useEffect(() => {
        const config = {
            orderToken: '<YOUR_ORDER_TOKEN>', // Replace with the actual order token from your backend
            components: ["order-summary", "card", "upi", "netbanking"],
            onSuccess: (data) => {
                console.log("Payment Successful", data);
            },
            onFailure: (data) => {
                console.log("Payment Failed", data);
            }
        };

        // Ensure Cashfree SDK is loaded
        if (window.Cashfree) {
            Cashfree.initialiseDropin(config);
        } else {
            console.error("Cashfree SDK not loaded");
        }
    }, []);

    return (
        <div>
            <h1>Payment Page</h1>
            <div id="cashfree-container"></div>
            {/* The Dropin UI will be rendered inside this container */}
        </div>
    );
};

export default PaymentPage;
