import { createContext, useState } from "react";

// as actual value to be used everywhere 
export const UserContext = createContext({

    currentUser: null,
    setCurrentUser: () => null
    
})

export const UserProvider = (props) => {

    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}