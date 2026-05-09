import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function WelcomePage() {

    const navigateToQuiz = useNavigate();
    const handleStart = () => {
        navigateToQuiz('/quiz')
    }

    return (
    <div>
        <h1> Welcome to general knowledge quiz </h1> 
        <button onClick = {handleStart} className = "welcome-button"> Test Your Knowledge Here !</button>
        
    </div>
    )
}
