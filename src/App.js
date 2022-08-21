import { useState } from 'react';
import './index.scss';
import { questions } from './questions';


const Result = ({correct, reset}) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} из {questions.length}</h2>
      <button onClick={reset}>Попробовать снова</button>
    </div>
  );
}

const Game = ({question, step, onClickVariant}) => {
  const percentage = Math.round(step / questions.length * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => <li key={item} onClick={()=> onClickVariant(index, question.correct)}>{item}</li>)}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  const onClickVariant = (variant, correctVariant) => {
    setStep(step + 1)
    if(variant === correctVariant){
      setCorrect(correct + 1)
    }
  }
  const reset = () => {
    setStep(0)
    setCorrect(0)
  }
  return (
    <div className="App">
      { step !== questions.length ? <Game step={step} onClickVariant={onClickVariant} question={question}/> : <Result reset={reset} correct={correct}/> }
    </div>
  );
}

export default App;
