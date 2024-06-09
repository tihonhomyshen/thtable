import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import FAQPage from './pages/FAQPage/FAQPage'
import MainPage from './pages/MainPage/MainPage'
import { HelpPage } from './pages/HelpPage/HelpPage'
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
                    <Route path='/faq' element={<FAQPage />} />
                    <Route path='/settings' element={<SettingsPage />} />
                    <Route path='/help' element={<HelpPage />} />
                </Routes>
            </ThemeProvider>
            <Footer />
        </>
    )
}

export default App
