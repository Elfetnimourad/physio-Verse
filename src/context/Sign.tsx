import { createContext } from "react";


const SignInContext = createContext(null);

export const SignContextProvider = ({children})=>{
    return <SignInContext.Provider value={}>{children}</SignInContext.Provider>
}