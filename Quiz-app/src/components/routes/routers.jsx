import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Quiz } from '../pages/quiz'
import WelcomePage from '../pages/welcomePage'
import EndPage from '../pages/EndPage'

export default function AppRouters() {
    return (
<BrowserRouter>
<Routes>
        <Route path = "/" element = {<WelcomePage/>}/>
        <Route path = "/quiz" element = {<Quiz/>}/>
        <Route path = '/end' element = {<EndPage/>} />
        <Route path = "*" element = {<h1> 404 Not Found </h1>}/>
</Routes>
</BrowserRouter>
    )
}
