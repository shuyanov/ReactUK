import React from "react";
import cd from "./NavBar.module.css"
import Sort from "./Sort/Sort";

let NavBar = () => {
    return(
        <div className={cd.nav}>
            <Sort />
        </div>
    )
}

export default NavBar;