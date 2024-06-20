import logo from '../../assets/icons/logo.svg'
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './Header.css'
import { useState } from "react"
import i18next from "i18next"
import { useEffect } from "react"
import { Select } from "../Select"


const languages = [
    { label: 'RU' },
    { label: "EN" }
]

const Header = () => {
    const { t } = useTranslation()

    const themes = [
        { label: t("themes.default"), value: "default" },
        { label: t("themes.pink"), value: "pink" },
        { label: t("themes.lightblue"), value: "lightblue" },
        { label: t("themes.lightgreen"), value: "lightgreen" }
    ]

    const [language, setLanguage] = useState('RU')
    const [theme, setTheme] = useState(t("themes.default"))
    const storedTheme = localStorage.getItem("theme")

    useEffect(() => {
        if (storedTheme) {
            setTheme(storedTheme)
            handleTheme(storedTheme);
        }
    }, [])

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
                        <Select options={themes} onChange={(e) => { setTheme(e.target.value); handleTheme(e.target.value); }} value={theme} />
                        <Select options={languages} onChange={(e) => { i18next.changeLanguage(e.target.value.toLowerCase()); setLanguage(e.target.value) }} value={language} />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header