import React from "react";
import { useTranslation } from "react-i18next"
import "./TableHeader.css"

export const TableHeader = () => {
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
            <div className="table-header">
                <ul className="menu">
                    <li className="menu__item">{t("table.name")}</li>
                    <li className="menu__item">{t("table.sales1")}</li>
                    <li className="menu__item">{t("table.price1")}</li>
                    <li className="menu__item">{t("table.price2")}</li>
                    <li className="menu__item">{t("table.income")}</li>
                    <li className="menu__item">{t("table.count1")}</li>
                    <li className="menu__item">{t("table.count2")}</li>
                </ul>
            </div>
        </>
    )

}