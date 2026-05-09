import React from 'react'
import './index.css'
import { Quiz } from './components/routes/quiz'
import WelcomePage from './components/routes/welcomePage'
import AppRouters from './components/pages/routers'

export default function App() {
  return (
  
    <div className = "app-container">
  <AppRouters/>
    </div>
  )
}
