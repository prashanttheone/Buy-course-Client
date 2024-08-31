import React, { Children, createContext, useState } from 'react';

const PriceContext = createContext();

const PriceProvider = ({ children }) => {

    const [price,setPrice] = useState(null);
    const [img, setImg] = useState(null);
    const [productName,setProductName] =useState(null);
    return(
        <PriceContext.Provider value={{price,setPrice ,img,setImg,productName,setProductName}}>
        {children}
    </PriceContext.Provider>
    );
};
export { PriceContext, PriceProvider };