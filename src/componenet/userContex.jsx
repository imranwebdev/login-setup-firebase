import { createContext, useEffect, useState } from "react";
import {authStateChageListener,createUserDocumentFromAuth} from "../firebase"
export const UserContex = createContext()

export const UserProvider = ({children})=>{
const [currentUser,setCurrentUser] = useState(null);

useEffect(()=>{
    const unsubscribe = authStateChageListener((user)=>{
        console.log(user) 
        if(user){
            createUserDocumentFromAuth(user)
        }
        setCurrentUser(user) 
    });
    return unsubscribe;
},[])
const  value  = {currentUser,setCurrentUser}
return <UserContex.Provider value={value}>{children}</UserContex.Provider>
}