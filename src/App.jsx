import React from 'react'
import Header from './components/Header/Header'

import { useTranslation } from 'react-i18next'
import BaseOptions from './components/BaseOptions/BaseOptions'
import OptionsList from './components/OptionsList/OptionsList'

function App() {

    return (
        <>
            <Header/>
            <OptionsList/>
        </>
    )
}

export default App
