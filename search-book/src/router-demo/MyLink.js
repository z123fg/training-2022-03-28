import { useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";


const MyLink = ({to, children}) => {
    const {forceUpdate} = useContext(RouterContext);
    const handleClick = (e) =>{
        e.preventDefault();
        window.history.pushState(null,null,to);
        forceUpdate();
        //re-render all MyRoute component
    }
    return <a href="#" onClick={handleClick}>{children}</a>
}

export default MyLink;