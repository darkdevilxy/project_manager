import Sidebar from "./components/sidebar/sidebar";
import { Navbar } from "./components/navbar/navbar";
import { Mainbody } from "./components/main_body/main_body";

import './App.css'
import { useAuth, useSigninCheck, useUser } from "reactfire";
import { useState } from "react";
import { updateCurrentUser } from "firebase/auth";


export default function App() {

    const {status, data:sign_in_check} = useSigninCheck();

    return (
        <>
            <div className="app_layout">
                <div className="navigation_layout">
                    <Navbar />
                </div>
                <main className="main_content">
                    {(()=> typeof sign_in_check.signedIn != "undefined") && <Sidebar />}
                    <Mainbody/>
                </main>
            </div>
        </>
    )
}
