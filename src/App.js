import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import QuestionsWrapper from "./components/Questions/QuestionsWrapper";

function App() {
    const [amountOfQuestions, setAmountOfQuestions] = useState(6);

    const [biggestSum, setBiggestSum] = useState(64);

    const [answers, setAnswers] = useState({});
    const [template, setTemplate] = useState({});

    const handleAmountChange = (amount) => {
        setAmountOfQuestions(amount);
    };

    const handleBiggestSumChange = (value) => {
        setBiggestSum(value);
    };

    const handleChangeTemplate = (value, position) => {
        template[position] = value;
    };

    const handleChangeAnswers = (value, position) => {
        template[position] = value;
    };

    const handleGradeCalc = () => {
        // calculateGrade(template, template, amountOfQuestions, biggestSum);
    };

    return (
        <div className="App">
            <Header
                amount={amountOfQuestions}
                biggest={biggestSum}
                changeAmount={setAmountOfQuestions}
                changeBiggestSum={setBiggestSum}
            />

            <QuestionsWrapper
                amount={parseInt(amountOfQuestions, 10)}
                template={template}
                answers={answers}
                templateHandler={handleChangeTemplate}
                answersHandler={handleChangeAnswers}
            />
        </div>
    );
}

export default App;
