import PropTypes from "prop-types";
import Question from "./Question";
import "./QuestionsWrapper.css";

const QuestionsWrapper = ({ amount, questionsData, onUpdateQuestion }) => {
    const questionsComponents = [];

    for (let i = 0; i < amount; i++) {
        questionsComponents.push(
            <Question
                key={i.toString()}
                number={i + 1}
                data={questionsData[i]}
                onUpdate={(field, value) => onUpdateQuestion(i, field, value)}
            />
        );
    }
    return <div className="grid">{questionsComponents}</div>;
};

QuestionsWrapper.propTypes = {
    amount: PropTypes.number.isRequired,
    questionsData: PropTypes.arrayOf(
        PropTypes.shape({
            template: PropTypes.number,
            answer: PropTypes.number,
        })
    ).isRequired,
    onUpdateQuestion: PropTypes.func.isRequired,
};

export default QuestionsWrapper;
