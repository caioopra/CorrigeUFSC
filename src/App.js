import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
    const [amountOfQuestions, setAmountOfQuestions] = useState(6);

    const [biggestSum, setBiggestSum] = useState(64);

    const [questions, setQuestions] = useState({});
    const [answers, setAnswers] = useState({});

    return (
        <div className="App">
            <Header 
              amount={amountOfQuestions}
              biggest={biggestSum}
              changeAmount={setAmountOfQuestions}
              changeBiggestSum={setBiggestSum}
            />
        </div>
    );
}

export default App;
