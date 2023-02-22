import React, { useContext, useState } from 'react'
import { Questions } from '../Helpers/QuestionBank'
import {quizContext} from '../Helpers/Contexts'

function EndQuiz() {

  const {score,setScore,setgameState} = useContext(quizContext);
  
  function RestartQuiz(){
    setScore(0);
    setgameState("menu");
  }
  
  return (
    <div className='End'>
      <h1>Quiz Finished!</h1>
      <h2>Result : {score}/{Questions.length}</h2>
      <button onClick={RestartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndQuiz