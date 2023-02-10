import React from "react";
import SortParametr from "./SortParametr/SortParametr";
import SortStatus from "./SortStatus/SortStatus";
import SortTime from "./SortTime/SortTime";

import sd from "./Sort.module.css"
let Sort = () => {
    return(
        <div className={sd.navMap}>
            SortParametr
            <SortParametr />
            SortStatus
            <SortStatus />
            SortTime
            <SortTime />
            -----
        </div>
    )
}

export default Sort;