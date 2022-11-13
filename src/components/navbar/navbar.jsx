import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useUser } from 'reactfire';

import logo from './../../assets/home.svg'
import user from './../../assets/user (1).svg'
import './navbar.css'

export function Navbar() {

    function authenticate_user(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="search">
                <img src="" alt="" className="search_icon" />
                <input className='search_bar' type="text" />
            </div>
            <div onClick={authenticate_user} className="user">
                <img src={user} alt="user" />
            </div>
        </nav>
    )
}