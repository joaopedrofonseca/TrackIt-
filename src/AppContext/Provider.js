import AppContext from "./Context";
import React, { useState } from "react";

export default function AppProvider({children}){
    const [token, setToken] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [image, setImage] = useState(undefined)

    return(
        <AppContext.Provider value={{token, setToken, name, setName, image, setImage}}>
            {children}
        </AppContext.Provider>
    )
}