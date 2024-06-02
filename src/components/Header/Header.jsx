import React from "react"
import Select from 'react-select'
import logo from '../../assets/icons/logo.svg'
import moon from '../../assets/icons/moon.svg'
import steam from '../../assets/icons/steam.svg'
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './Header.css'
import FAQPage from "../../pages/FAQPage/FAQPage"


const Header = () => {
    const { t, i18n } = useTranslation()
    const languages = [
        { value: 'ru', label: 'RU' },
        { value: 'en', label: "EN" }
    ]

    return (
        <>
            <header>
                <div className="container header-container">
                    <nav className="nav-menu">
                        <ul className="nav-menu__items">
                            <li className="nav-menu__item logo"><Link to={"/"}><img src={logo} alt="" /></Link></li>
                            <li className="nav-menu__item"><Link to={"/"}>{t("header.table")}</Link></li>
                            <li className="nav-menu__item"><Link to={"bonus"}>{t("header.bonus")}</Link></li>
                            <li className="nav-menu__item"><Link to={"faq"}>{t("header.questions")}</Link></li>
                            <li className="nav-menu__item"><Link to={"settings"}>{t("header.settings")}</Link></li>
                            <li className="nav-menu__item"><Link to={"help"}>{t("header.support")}</Link></li>
                        </ul>
                    </nav>
                    <div className="header-buttons">
                        <Select options={languages} placeholder={t("header.chooseLanguage")} />
                        <button className="button themeButton">
                            <img src={moon} alt="" />
                        </button>
                        <button className="button authButton">
                            <img src={steam} alt="" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header