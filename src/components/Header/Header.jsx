import React from "react"
import Select from 'react-select'
import logo from '../../assets/icons/logo.svg'
import moon from '../../assets/icons/moon.svg'
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './Header.css'


const Header = () => {
    const { t, i18n } = useTranslation()
    const languages = [
        {value: 'ru', label: 'RU'},
        {value: 'en', label: "EN"}
    ]

    const themes = [
        
    ]

    return (
        <>
            <header>
                <div className="container header-container">
                    <img src={logo} alt="logo" />
                    <nav className="nav-menu">
                        <ul className="nav-menu__items">
                            <li className="nav-menu__item"><a href="">{t("header.table")}</a></li>
                            <li className="nav-menu__item"><a href="">{t("header.bonus")}</a></li>
                            <li className="nav-menu__item"><a href="">{t("header.questions")}</a></li>
                            <li className="nav-menu__item"><a href="">{t("header.settings")}</a></li>
                        </ul>
                    </nav>
                    <Select options={languages} placeholder={t("header.choose")}/>
                    <button className="button themeButton">
                        <img src={moon} alt="" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header