import React from "react";
import Finance from "./Finance/Finance";
import Logo from "./Logo/Logo";
import Statistic from "./Statistic/Statistic";
import Head from "./Head/Head";
import Dialog from "./Dialog/Dialog";

import disign from './Header.module.css'
import User from "./User/User";


let Header = () => {
    return (
        <div className={disign.headerElement}>
            <a><Logo /></a>
            <a><Head /></a>
            <a><Statistic /></a>
            <a><Finance /></a>
            <a><Dialog /></a>
            <a><User /></a>
        </div>
    )
}

export default Header;