import {createContext, useState} from "react";

const Context =createContext(null)

const ContextProvider = ({children}) => {

    const[data,setData] = useState([]);

    return (
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};