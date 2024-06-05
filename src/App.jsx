import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import OptionsList from './components/OptionsList/OptionsList'
import { Table } from './components/Table/Table'
import BonusPage from './pages/BonusPage/BonusPage'
import FAQPage from './pages/FAQPage/FAQPage'
import MainPage from './pages/MainPage/MainPage'
import { THEME_ID } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'


const theme = createTheme();

function App() {
    
    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/profile' element={<BonusPage />} />
                    <Route path='/faq' element={<FAQPage />} />
                </Routes>
            </ThemeProvider>
            <Footer />
        </>
    )
}

export default App
