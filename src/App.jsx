import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { useTranslation } from 'react-i18next'
import BaseOptions from './components/BaseOptions/BaseOptions'
import OptionsList from './components/OptionsList/OptionsList'
import { Table } from './components/Table/Table'

function App() {

    return (
        <>
            <Header/>
            <OptionsList/>
            <Table/>
            <Footer/>
        </>
    )
}

export default App
