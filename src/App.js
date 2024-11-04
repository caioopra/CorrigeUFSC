import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import QuestionsWrapper from "./components/Questions/QuestionsWrapper";

function App() {
    const [amountOfQuestions, setAmountOfQuestions] = useState(6);
    const [biggestSum, setBiggestSum] = useState(64);
    const [answers, setAnswers] = useState({});
    const [template, setTemplate] = useState({});

    const handleChangeTemplate = (value, position) => {
        setTemplate((prevTemplate) => ({
            ...prevTemplate,
            [position]: value, // Directly store number
        }));
    };

    const handleChangeAnswers = (value, position) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [position]: value, // Directly store number
        }));
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
                handleChangeTemplate={handleChangeTemplate}
                handleChangeAnswers={handleChangeAnswers}
            />
        </div>
    );
}

export default App;
