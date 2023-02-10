import React from "react";
import BackBar from "./BackBar/BackBar";
import NavBar from "./NavBar/NavBar";
import Request from "./Request/Request";
import cd from "./Window.module.css"

let MainWindow = () => {
    return(
        <div className={cd.windowElement}>
            <BackBar />
            <NavBar />
            <Request />
        </div>
    )
}

export default MainWindow;