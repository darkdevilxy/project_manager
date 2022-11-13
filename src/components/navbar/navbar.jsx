import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'

import { ProfilePhoto } from './profile_photo/profile_photo';

import home from './../../assets/home.svg'
import hamburger from './../../assets/hamburger.svg'
import './navbar.css'

export function Navbar() {
    const [search_text, set_search_text] = useState('');

    function authenticate_user(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
    }
    console.log(search_text)

    return (
        <nav className="navbar">
            <div className="left_section">
                <img src={hamburger} alt="" className="hamburger_menu" />
                <img src={home} alt="logo" />
            </div>
            <div className="search">
                <input value={search_text} onChange={(e)=> set_search_text(e.target.value)} className='search_bar' type="text" />
            </div>
            <div onClick={authenticate_user} className="user">
                <ProfilePhoto />
            </div>
        </nav>
    )
}