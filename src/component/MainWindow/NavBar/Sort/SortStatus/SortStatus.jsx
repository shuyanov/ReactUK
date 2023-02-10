import React from "react";
import sd from "./SortStatus.module.css"

let SortStatus = () => {
    return(
        <div className={sd.navMap}>
            <button className={sd.buttomSort}>Новые</ button>
            <button className={sd.buttomSort}>В Работе</ button>
            <button className={sd.buttomSort}>Закрыто</ button>
            <button className={sd.buttomSort}>Отклонено</ button>
        </div>
    )
}

export default SortStatus;