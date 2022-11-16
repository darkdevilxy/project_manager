import Sidebar from "./components/sidebar/sidebar";
import { Navbar } from "./components/navbar/navbar";
import { Mainbody } from "./components/main_body/main_body";
import React from "react";

import './App.css'

export default function App() {

    return (
        <>
            <div className="app_layout">
                <div className="navigation_layout">
                    <Navbar />
                </div>
                <main className="main_content">
                    <Sidebar />
                    <Mainbody/>
                </main>
            </div>
        </>
    )
}
