import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import QuestionsWrapper from "./components/Questions/QuestionsWrapper";

function App() {
    const [amountOfQuestions, setAmountOfQuestions] = useState(6);
    const [biggestSum, setBiggestSum] = useState(64);

    // Single state to hold data for all questions
    const [questionsData, setQuestionsData] = useState(
        Array.from({ length: 6 }, () => ({ template: 0, answer: 0 }))
    );

    const handleAmountChange = (amount) => {
        setAmountOfQuestions(amount);
        setQuestionsData(
            Array.from({ length: amount }, () => ({ template: 0, answer: 0 }))
        );
    };

    const handleUpdateQuestion = (index, field, value) => {
        setQuestionsData((prevData) =>
            prevData.map((question, i) =>
                i === index ? { ...question, [field]: value } : question
            )
        );
    };

    return (
        <div className="App">
            <Header
                amount={amountOfQuestions}
                biggest={biggestSum}
                changeAmount={handleAmountChange}
                changeBiggestSum={setBiggestSum}
            />

            <QuestionsWrapper
                amount={amountOfQuestions}
                questionsData={questionsData}
                onUpdateQuestion={handleUpdateQuestion}
            />
        </div>
    );
}

export default App;
