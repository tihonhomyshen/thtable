import React from "react";
import { useTranslation } from "react-i18next"
import "./Controls.css"

const Controls = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <div className="upper-row">
                <p>{t("table.lastUpdate")}: 2m ago</p>
                <div className="controls">
                    <input className='search' type="text" placeholder={t("table.search")} />
                    <button className="button">{t("table.update")}</button>
                </div>
            </div>
        </>
    )

}

export default Controls
