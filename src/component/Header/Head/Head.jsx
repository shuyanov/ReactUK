import React from "react";
import { NavLink } from "react-router-dom";
import cd from "./Head.module.css"

let Head = () => {
    return (
        <div  className={cd.head}>
            <NavLink>
                Head
            </NavLink>
        </div>
    )
}

export default Head;