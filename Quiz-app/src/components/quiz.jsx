import React from 'react'
import { useState } from 'react'
import {questionBank} from './questionBankList'
export const Quiz = () => {


const[optionSelected, setOptionSelected] = useState("None")
const[message, setMessage] = useState("")
const[currentQuestion, setCurrentQuestion] = useState(0)
const[isSubmitted, setIsSubmitted] = useState(false)

const handleNext =() =>{
    if (currentQuestion < questionBank.length -1){
        setCurrentQuestion(currentQuestion + 1)
        setOptionSelected("None")
        setMessage("")
        setIsSubmitted(false)
    }else if (currentQuestion === questionBank.length -1){
        setMessage("You have reached the last question")
    }

}
const handlePrev =() =>{
    if (currentQuestion >0){
        setCurrentQuestion(currentQuestion - 1)
        setOptionSelected("None")
        setMessage("")
        setIsSubmitted(false)

    }else if (currentQuestion ===0){
        setMessage("You Have Reached the First Question")
    }

}
const handleSelectOption = (option) => {
    setOptionSelected(option);
}

const handleSubmit = () =>{
    setIsSubmitted(true)
    if (optionSelected === questionBank[currentQuestion].answer){

        setMessage("Correct Answer")
        
    } else{
        setMessage( `Correct Answer is ${questionBank[currentQuestion].answer}`)
    }
        
}   
    return (
    <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className = "question"> {questionBank[currentQuestion].question}</p>

        {questionBank[currentQuestion].options.map((option,index)=>(
            <button 
            key = {index}
            onClick = {()=> handleSelectOption(option)} className= {"option" + 
            (optionSelected ===option? (isSubmitted ? (option==questionBank[currentQuestion].answer?" green":" red"): " selected"): "")}>
            {option}
        </button>

        ))}
        <p> Option Selected: {optionSelected} </p>
        <p> {message} </p>


        <div className = "nav-buttons"> 
            <button 
            onClick = {handlePrev}> Previous</button>
            <button onClick = {handleSubmit}> Submit</button>
            <button 
            onClick = {handleNext}> Next</button>
        
        </div>
    </div>
    )

}