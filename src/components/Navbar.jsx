import logo from "../images/Uchiha.jpg"

export default function Navbar() {
    return(
        <nav className="navbar">

            <div className="logo">
                <img src={logo} alt="Website logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>

        </nav>


    );
}