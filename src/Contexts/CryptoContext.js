import { createContext, useContext, useEffect, useState } from "react";

const CryptoContext = createContext();


function CryptoContextProvider({ children }) {
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");


    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$")
    }, [currency])

    return <CryptoContext.Provider value={{ currency, symbol, setCurrency }}>{children}</CryptoContext.Provider>
}


const useCrypto = () => useContext(CryptoContext);



export { CryptoContextProvider, useCrypto };

