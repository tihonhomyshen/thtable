import React from "react";
import "./HelpPage.css"
import tg from "../../assets/icons/telegram.png"
import { useTranslation } from "react-i18next";

export const HelpPage = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <div className="container">
                <div className="support-block">
                    <p>{t("help")}</p>
                    <p className="email">thtable.support@gmail.com</p>
                </div>
                <div className="support-block">
                    <a href="https://t.me/thtablesupport_bot"><img src={tg} alt="" /></a>
                </div>
            </div>
        </>

    )
}