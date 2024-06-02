import React, {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import OptionsList from './components/OptionsList/OptionsList'
import { Table } from './components/Table/Table'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/api')
        .then(response => response.json())
        .then(response => setData(response.message))
    })

    console.log(data)


    return (
        <>
            <Header/>
            <OptionsList/>
            <Table/>
            <Footer/>
            <Routes>
                <Route path='profile' element={<ProfilePage/>}/>
                <Route path='faq' element={/>
            </Routes>
        </>
    )
}

export default App
