import { Link } from "react-router-dom";
import MyLink from "../../../router-demo/MyLink";
import "./Header.css"

const Header = ({setIsHome}) => {
    const handleClickLink = (e) => {
        e.preventDefault();
        setIsHome(prev=>!prev)
    }
    return (
        <nav className="header">
            <Link to="/home">home</Link>
            <Link to="/wishlist">wishlist</Link>
        </nav>
    )
}

export default Header;