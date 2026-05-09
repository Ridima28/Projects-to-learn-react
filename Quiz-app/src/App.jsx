import React from 'react'
import './index.css'
import { Quiz } from './components/pages/quiz'
import WelcomePage from './components/pages/welcomePage'
import AppRouters from './components/routes/routers'
import EndPage from './components/pages/EndPage'

export default function App() {
  return (
  
    <div className = "app-container">
  <AppRouters/>
    </div>
  )
}
