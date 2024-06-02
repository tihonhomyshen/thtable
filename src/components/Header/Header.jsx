import React from "react"
import Select from 'react-select'
import logo from '../../assets/icons/logo.svg'
import moon from '../../assets/icons/moon.svg'
import steam from '../../assets/icons/steam.svg'
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './Header.css'


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
                            <li className="nav-menu__item logo"><a href=""><img src={logo} alt="" /></a></li>
                            <li className="nav-menu__item"><a href="">{t("header.table")}</a></li>
                            <li className="nav-menu__item"><a href="">{t("header.profile")}</a></li>
                            <li className="nav-menu__item"><a href="">{t("header.questions")}</a></li>
                            <li className="nav-menu__item"><a href="">{t("header.settings")}</a></li>
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