import React from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

export default function WelcomePage() {

    const navigateToQuiz = useNavigate();
    const handleStart = () => {
        navigateToQuiz('/quiz')
    }

    return (
    <div>
        <h1> Welcome to general knowledge quiz </h1> 
        <button onClick = {handleStart} className = "nav-buttons"> Test Your Knowledge Here !</button>
        
    </div>
    )
}
