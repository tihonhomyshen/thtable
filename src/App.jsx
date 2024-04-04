import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from './assets/icons/logo.svg'

function App() {

  const { t, i18next } = useTranslation()

  const changeLanguage = (language) => {
    i18next.changeLanguage(language);
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
    </>
  )
}

export default App
