import "./dropdown.css";

import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useSigninCheck } from "reactfire";
import { useEffect } from "react";

export default function DropDown() {
  const { status, data: sign_in_data } = useSigninCheck();

  function authenticate_user() {
          const provider = new GoogleAuthProvider();
          const auth = getAuth();
          signInWithPopup(auth, provider);
      }

  function logout_user() {
    getAuth().signOut()
      .then(console.log("Logged Out"))
        
    }

  return (
    <div className="dropdown_container">
      <button onClick={authenticate_user} className="login">
        Login
      </button>
      <button onClick={logout_user} className="logout">Logout</button>
    </div>
  );
}
