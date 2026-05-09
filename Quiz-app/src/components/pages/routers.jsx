import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Quiz } from '../routes/quiz'
import WelcomePage from '../routes/welcomePage'

export default function AppRouters() {
    return (
<BrowserRouter>
<Routes>
        <Route path = "/" element = {<WelcomePage/>}/>
        <Route path = "/quiz" element = {<Quiz/>}/>
</Routes>
</BrowserRouter>
    )
}
