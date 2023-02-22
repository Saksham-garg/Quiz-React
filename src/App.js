import { useState } from 'react';
import './App.css';
import EndQuiz from './Components/EndQuiz';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz'
import { quizContext } from './Helpers/Contexts';

function App() {
  const [gameState,setgameState] = useState("menu");
  const [score,setScore] = useState(0);
  return (
    <div className="App">
            <h1>Quiz Game</h1>
      
      <quizContext.Provider value={{gameState,setgameState,score,setScore}}>
        { gameState === "menu" && <MainMenu></MainMenu>}
        { gameState === "start" && <Quiz></Quiz>}
        { gameState === "end" && <EndQuiz></EndQuiz>}
      </quizContext.Provider>

    </div>
  );
}

export default App;
