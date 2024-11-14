import { useState } from "react";
import "./FinalGrade.css";

import calculateGrade from "../../utils/calculateGrade";

const FinalGrade = (props) => {
    const [grade, setGrade] = useState(0);

    const calculateCurrentGrade = () => {
        const grade = calculateGrade(
            props.questionsData,
            props.amountOfQuestions,
            props.biggestAlternative
        );
        setGrade(grade.join("; "));
    };

    return (
        <div className="grade">
            <button className="calc-grade" onClick={calculateCurrentGrade}>
                Calcular nota
            </button>
            <p className="nota">Nota: {grade}</p>
        </div>
    );
};

export default FinalGrade;
