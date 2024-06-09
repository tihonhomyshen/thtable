import React from "react";
import { useTranslation } from "react-i18next"
import "./SettingsPage.css"

export const SettingsPage = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <div className="container settings__container">
                <div className="service">
                    <div className="upper-row">
                        <img src="" alt="" />
                        <h2 className="service-title">TM</h2>
                    </div>
                    <div className="lower-row">
                        <p>{t("settings.comission")}</p>
                        <input type="text" placeholder="5" disabled />
                        <p>{t("settings.bonus")}</p>
                        <input type="text" placeholder="0" />
                    </div>
                </div>
                <div className="service">
                    <div className="upper-row">
                        <img src="" alt="" />
                        <h2 className="service-title">Skinport</h2>
                    </div>
                    <div className="lower-row">
                        <p>{t("settings.comission")}</p>
                        <input type="text" placeholder="4" disabled />
                        <p>{t("settings.bonus")}</p>
                        <input type="text" placeholder="0" />
                    </div>
                </div>
            </div>
        </>
    )
}
