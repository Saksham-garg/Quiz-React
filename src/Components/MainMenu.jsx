import React, { useContext } from 'react'
import { quizContext } from '../Helpers/Contexts'

function MainMenu() {
    const {gameState,setgameState} = useContext(quizContext);
  return (
    <div className='Menu'>
        <button onClick={()=>{setgameState("start")}}>Start Quiz</button>
    </div>
  )
}

export default MainMenu