import { createContext, useState } from "react"



export const RouterContext = createContext();

const MyBrowserRouter = ({children}) => {
    const [toggle,setToggle] = useState(false);
    const forceUpdate = () => {
        setToggle(prev=>!prev);
    }
    return (
        <RouterContext.Provider value={{toggle,forceUpdate}}>
            {children}
        </RouterContext.Provider>
            
        
    )
}

export default MyBrowserRouter