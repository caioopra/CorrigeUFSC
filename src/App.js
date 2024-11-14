import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import QuestionsWrapper from "./components/Questions/QuestionsWrapper";
import FinalGrade from "./components/Grade/FinalGrade";
import calculateGrade from "./utils/calculateGrade";

function App() {
    const [amountOfQuestions, setAmountOfQuestions] = useState(6);
    const [biggestAlternative, setbiggestAlternative] = useState(64);

    // Single state to hold data for all questions
    const [questionsData, setQuestionsData] = useState(
        Array.from({ length: 6 }, () => ({ template: 0, answer: 0 }))
    );

    const handleAmountChange = (amount) => {
        if (amount < 0) {
            amount = 0;
        }

        setAmountOfQuestions(amount);
        setQuestionsData((prevData) => {
            const newData = [...prevData];

            if (amount > prevData.length) {
                // Add new questions
                for (let i = prevData.length; i < amount; i++) {
                    newData.push({ template: 0, answer: 0 });
                }
            } else if (amount < prevData.length) {
                // Remove extra questions
                newData.length = amount;
            }

            return newData;
        });
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
                biggest={biggestAlternative}
                changeAmount={handleAmountChange}
                changebiggestAlternative={setbiggestAlternative}
            />

            <QuestionsWrapper
                amount={amountOfQuestions}
                questionsData={questionsData}
                onUpdateQuestion={handleUpdateQuestion}
            />

            <FinalGrade
                questionsData={questionsData}
                amountOfQuestions={amountOfQuestions}
                biggestAlternative={biggestAlternative}
            />
        </div>
    );
}

export default App;
