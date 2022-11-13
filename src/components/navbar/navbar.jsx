import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

import { ProfilePhoto } from './profile_photo/profile_photo';

import logo from './../../assets/home.svg'
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
                <ProfilePhoto />
            </div>
        </nav>
    )
}