import { useState } from "react";
import React from "react";

import { ProfilePhoto } from "./profile_photo/profile_photo";
import DropDown from "./dropdown/dropdown";

import home from "./../../assets/home.svg";
import hamburger from "./../../assets/hamburger.svg";

import "./navbar.css";

export function Navbar() {
  const [search_text, set_search_text] = useState("");
  const [dropdown_status, set_dropdown_status] = useState(false);

  function handle_dropdown() {
    set_dropdown_status(() => !dropdown_status);
  }

  return (
    <nav className="navbar">
      <div className="left_section">
        <img src={hamburger} alt="" className="hamburger_menu" />
        <img src={home} alt="logo" />
      </div>
      <div className="search">
        <input
          value={search_text}
          onChange={(e) => set_search_text(e.target.value)}
          className="search_bar"
          type="text"
        />
      </div>
      <div onClick={handle_dropdown} className="user">
        {dropdown_status ? <DropDown /> : null}
        <ProfilePhoto />
      </div>
    </nav>
  );
}
