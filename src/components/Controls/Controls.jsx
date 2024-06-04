import React from "react";
import { useTranslation } from "react-i18next"
import "./Controls.css"
import axios from "axios";

const Controls = () => {
    const { t, i18n } = useTranslation()

    async function fetchItems() {
        const response = await axios.get("https://api.skinport.com/v1/items")        
        console.log(response.data)
    }

    return (
        <>
            <div className="upper-row">
                <p>{t("table.lastUpdate")}: 2m ago</p>
                <div className="controls">
                    <input className='search' type="text" placeholder={t("table.search")} />
                    <button onClick={fetchItems} className="button">{t("table.update")}</button>
                </div>
            </div>
        </>
    )

}

export default Controls
