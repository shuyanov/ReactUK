import React from "react";
import sd from "./SortTime.module.css"
let SortTime = () => {
    return(
        <div className={sd.navMap}>
        <button className={sd.buttomSort}>За неделю</button>
        <button className={sd.buttomSort}>За месяц</button>
        <button className={sd.buttomSort}>За всё время</button>
    </div>
    )
}

export default SortTime;