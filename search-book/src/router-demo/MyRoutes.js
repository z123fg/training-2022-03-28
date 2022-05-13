import { useContext, useEffect } from "react"
import { RouterContext } from "./MyBrowserRouter"


const MyRoutes = ({children}) => {
    const {forceUpdate} = useContext(RouterContext);

    useEffect(()=>{
        const handlePopState = () => {
            forceUpdate();
        }
        window.addEventListener("popstate",handlePopState);
        return ()=>{
            window.removeEventListener("popstate",handlePopState);
        }
    },[forceUpdate])
    return (
        <>{children}</>
    )
}

export default MyRoutes