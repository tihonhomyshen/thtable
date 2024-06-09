import React from "react"
import logo from '../../assets/icons/logo.svg'
import moon from '../../assets/icons/moon.svg'
import steam from '../../assets/icons/steam.svg'
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './Header.css'
import { useState } from "react"
import { TextField, MenuItem } from "@mui/material"
import i18next, { changeLanguage } from "i18next"
import { useEffect } from "react"


const Header = () => {
    const { t, i18n } = useTranslation()

    const [language, setLanguage] = useState('')

    const languages = [
        { label: 'RU' },
        { label: "EN" }
    ]


    const storedTheme = localStorage.getItem("theme")
    useEffect(() => {
        if (storedTheme) {
            setTheme(storedTheme)
            handleTheme(storedTheme);
        }
    }, [])

    const [theme, setTheme] = useState("default")

    const themes = [
        { label: t("themes.default"), value: "default" },
        { label: t("themes.pink"), value: "pink" },
        { label: t("themes.lightblue"), value: "lightblue" },
        { label: t("themes.lightgreen"), value: "lightgreen" }

    ]

    const handleTheme = (theme) => {
        document.body.classList = ''
        document.body.classList.add(theme)

        localStorage.setItem("theme", theme);
    }
    return (
        <>
            <header>
                <div className="container header-container">
                    <nav className="nav-menu">
                        <ul className="nav-menu__items">
                            <li className="nav-menu__item logo"><Link to={"/"}><img src={logo} alt="" /></Link></li>
                            <li className="nav-menu__item"><Link to={"/"}>{t("header.table")}</Link></li>
                            <li className="nav-menu__item"><Link to={"faq"}>{t("header.questions")}</Link></li>
                            <li className="nav-menu__item"><Link to={"settings"}>{t("header.settings")}</Link></li>
                            <li className="nav-menu__item"><Link to={"help"}>{t("header.support")}</Link></li>
                        </ul>
                    </nav>
                    <div className="header-buttons">
                        <TextField sx={{ minWidth: 100 }} size='small' select onChange={(e) => { setTheme(e.target.value); handleTheme(e.target.value); }} value={theme} >
                            {themes.map(i =>
                                <MenuItem value={i.value}>{i.label}</MenuItem>
                            )}
                        </TextField>
                        <TextField sx={{ minWidth: 100 }} size='small' select onChange={(e) => { i18next.changeLanguage(e.target.value.toLowerCase()); setLanguage(e.target.value) }} value={language} >
                            {languages.map(i =>
                                <MenuItem value={i.label}>{i.label}</MenuItem>
                            )}
                        </TextField>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header