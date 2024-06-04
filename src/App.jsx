import React, {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import OptionsList from './components/OptionsList/OptionsList'
import { Table } from './components/Table/Table'
import BonusPage from './pages/BonusPage/BonusPage'
import FAQPage from './pages/FAQPage/FAQPage'
import MainPage from './pages/MainPage/MainPage'

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/profile' element={<BonusPage/>}/>
                <Route path='/faq' element={<FAQPage/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
