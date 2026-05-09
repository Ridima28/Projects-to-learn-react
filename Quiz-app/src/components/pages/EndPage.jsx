import React from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

export default function EndPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const score = location.state?.score
    const total = location.state?.totalQuestion


    return (
    <div>
        <h1> Quiz Completed ! </h1>
        <p> Your Score : {score} / {total} </p>
            <button
            className = "home-button"
            onClick={() => navigate("/")}>
                Go to Home
            </button>

    </div>
    )
}
