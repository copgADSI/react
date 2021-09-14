import { useState,useEffect,useMemo } from "react";
import "./app.css";
import {Timer} from "./components/Timer";
import { Trivia } from "./components/Trivia";


function App() {
  const [timeOut, setTimeout] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
console.log(timeOut);

  const data = [
    {
      question: "¿1.Cuál es el nombre del río más largo del mundo?",
      id: 1,
      answers: [
        {
          text: "El río Amazonas",
          correct: true,
        },
        {
          text: "El río Orinoco",
          correct: false,
        },
        {
          text: "El río Nilo",
          correct: false,
        },
        {
          text: "El río Misisipi",
          correct: false,
        },
      ],
    },
    {
      question: "2. ¿Cuál es el océano más grande del mundo?",
      id: 2,
      answers: [
        {
          text: "Oceano Índico",
          correct: false,
        },
        {
          text: "Océano Pacífico",
          correct: true,
        },
        {
          text: "Oceano Atláctico",
          correct: false,
        },
        {
          text: "Oceano Caribe",
          correct: false,
        },
      ],
    },
    {
      question: "3. ¿Cuál es el país que tiene forma de bota?",
      id: 3,
      answers: [
        {
          text: "Italia",
          correct: true,
        },
        {
          text: "Rusia",
          correct: false,
        },
        {
          text: "Colombia",
          correct: false,
        },
        {
          text: "Japón",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 300" },
      { id: 3, amount: "$ 600" },
      { id: 4, amount: "$ 12000" },
      { id: 5, amount: "$ 20000" },
      { id: 6, amount: "$ 5000" },
      { id: 7, amount: "$ 10000" },
      { id: 8, amount: "$ 15000" },
      { id: 9, amount: "$ 20000" },
      { id: 10, amount: "$ 25000" },
      { id: 11, amount: "$ 30000" },
      { id: 12, amount: "$ 35000" },
      { id: 13, amount: "$ 40000" },
      { id: 14, amount: "$ 50000" },
      { id: 15, amount: "$ 100000" },
    ].reverse(),[]) 
  
  //Actualizamos la ganancia una vez que avance a la sig pregunta
  useEffect(() => {
    //Setiamos la ganancia conla pregunta actual 
   questionNumber>1 && setEarned(moneyPyramid.find((money)=> money.id === questionNumber -1).amount)
  }, [moneyPyramid, questionNumber])
  return (
    <div className="app">
      <div className="main">
        {timeOut  ? ( //Si el verdadero mostramos el monto ganado de lo contrario sigue la trivia
          <h1 className="endText" >You earned: {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer"> <Timer setTimeout={setTimeout} questionNumber={questionNumber} /> </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                timeOut={setTimeout}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((money) => (
            <li
              className={
                questionNumber === money.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber"> {money.id} </span>
              <span className="moneyListItemAmount"> {money.amount} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
