const config = {
    orderToken: '<YOUR_ORDER_TOKEN>',
    components: ["order-summary", "card", "upi", "netbanking"],
    onSuccess: (data) => {
        console.log("Payment Successful", data);
    },
    onFailure: (data) => {
        console.log("Payment Failed", data);
    }
};

Cashfree.initialiseDropin(config);