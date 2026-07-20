import logo from "../images/Uchiha.jpg"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav className="navbar">

            <div className="logo">
                <img src={logo} alt="Website logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>

        </nav>


    );
}
