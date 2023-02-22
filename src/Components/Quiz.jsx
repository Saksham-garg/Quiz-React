import React, { useContext, useState } from 'react'
import { Questions } from '../Helpers/QuestionBank'
import {quizContext} from '../Helpers/Contexts'
function Quiz() {
  const [questionNumber,setQuestionNumber] = useState(0);
  const [optionChosen,setOptionChosen]= useState("");
  const {score,setScore,setgameState} = useContext(quizContext);
  function questionAnswer(){
    if( Questions[questionNumber].answer === optionChosen){
      setScore(score+1);
    }
    setQuestionNumber(questionNumber+1);
  }

  function FinishQuiz(){
    if( Questions[questionNumber].answer === optionChosen){
      setScore(score+1);
    }
    setgameState("end");
  }

  return (
    <div className='Quiz'>
      <h1>{Questions[questionNumber].question}</h1>
      <div className="options">
        <button onClick={()=>{setOptionChosen("option1")}}>{Questions[questionNumber].option1}</button>
        <button onClick={()=>{setOptionChosen("option2")}}>{Questions[questionNumber].option2}</button>
        <button onClick={()=>{setOptionChosen("option3")}}>{Questions[questionNumber].option3}</button>
        <button onClick={()=>{setOptionChosen("option4")}}>{Questions[questionNumber].option4}</button>
      </div>
      {questionNumber !== Questions.length - 1 ? <button onClick={questionAnswer}>Submit</button>:<button onClick={FinishQuiz}>Finish Quiz</button>}
      
    </div>
  )
}

export default Quiz