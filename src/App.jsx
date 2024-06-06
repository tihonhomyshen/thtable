import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import BonusPage from './pages/BonusPage/BonusPage'
import FAQPage from './pages/FAQPage/FAQPage'
import MainPage from './pages/MainPage/MainPage'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { SettingsPage } from './pages/SettingsPage/SettingsPage'


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
                    <Route path='/settings' element={<SettingsPage />} />
                </Routes>
            </ThemeProvider>
            <Footer />
        </>
    )
}

export default App
