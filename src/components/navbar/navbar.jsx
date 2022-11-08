import logo from './../../assets/home.svg'
import user from './../../assets/user (1).svg'
import './navbar.css'

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            <div className="user">
                <img src={user} alt="user" />
            </div>
        </nav>
    )
}