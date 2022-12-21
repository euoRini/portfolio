import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/mainPage'

export default function MainRoutes () {
    return(
        <Routes>
            <Route exact path="/" element={<MainPage/>}/>
        </Routes>
    )
}