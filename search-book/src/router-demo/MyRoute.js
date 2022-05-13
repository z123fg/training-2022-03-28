import { useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";


const MyRoute = ({path, element}) => {
    const {toggle} = useContext(RouterContext);
    const currentPathname = window.location.pathname;

    if(path === currentPathname) return <>{element}</>
    else return null;
}


export default MyRoute;