import {createContext,useState} from 'react'

export const userName = createContext(null);

// We make Provider
export const UserProvider = (props) => {
    const [user,setUser] = useState("");

    return(
        <userName.Provider value={{user,setUser}}>
            {props.children}
        </userName.Provider>
    )
}
