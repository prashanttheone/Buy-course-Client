import { load } from "@cashfreepayments/cashfree-js";
import { PriceContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';

function Checkout() {
  
  const { price, img, productName } = useContext(PriceContext);
  const [cashfree, setCashfree] = useState(null);
  const [customerName,setCustomerName] =useState("");
  const [customerEmail,setCustomerEmail] =useState("");
  const [customerPhone,setCustomerPhone] =useState("");
 
  // Initialize Cashfree SDK
  useEffect(() => {
    const initializeSDK = async () => {
      try {
        const sdk = await load({ mode: "sandbox" });
        setCashfree(sdk);
      } catch (error) {
        console.error("Error initializing Cashfree SDK:", error);
      }
    };

    initializeSDK();
  }, []);

  // Handle Payment
  const doPayment = async () => {
    const payload = {
      orderAmount: price,
      productName: productName,
      customerName: customerName,
      customerEmail: customerEmail,
      customerPhone: customerPhone,
    };

    try {
     
      console.log("Payload data being sent:", payload);
      // Create order on your server
      const response = await axios.post('http://localhost:5000/api/create-order', payload);
      const { paymentToken, sessionId } = response.data;
      console.log("Session ID received:", sessionId);

      // Checkout options
      const checkoutOptions = {
       paymentSessionId:sessionId,
       redirectTarget: "_modal"
      };
      //handleSubmit
     

      // Execute payment using Cashfree
      if (cashfree) {
        cashfree.checkout(checkoutOptions);
      } else {
        console.error("Cashfree SDK not initialized properly");
      }
    } catch (error) {
      console.error('Payment Error:', error.response ? error.response.data : error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Form details:");
    console.log("Name:", customerName);
    console.log("Phone:", customerPhone);
    console.log("Email:", customerEmail);

    // Trigger payment
    doPayment();
  };


  return (
    <div className="bg-slate-500 min-h-screen flex items-center justify-center">
      <div className="flex-col">
        <h1>{productName}</h1>
        <img src={img} alt="Product" className="w-[120px] h-[120px]" />
        <p>{price}</p>
        <p>Click below to open the checkout page in the current tab</p>

        {/* form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="">NAME:
            <input type="text" name="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required />
          </label>
          <label htmlFor="">Phone:
            <input type="text" name="phone"
                         value={customerPhone}
                         onChange={(e) => setCustomerPhone(e.target.value)}
                          required
             />
          </label>
          <label htmlFor="">
            EMAIL:
            <input type="email" 
            name="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required/>
          </label>
         
        
        </form>
        <button
          id="renderBtn"
          onClick={doPayment}
          className=" w-[130px] relative inline-flex items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white rounded"
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Pay Now</span>
        </button>
      </div>
    </div>
  );
}

export default Checkout;
