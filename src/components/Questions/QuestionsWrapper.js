import PropTypes from "prop-types";
import Question from "./Question";
import "./QuestionsWrapper.css";

const QuestionsWrapper = ({ amount, template, answers, handleChangeTemplate, handleChangeAnswers }) => {
    const questionsComponents = [];

    for (let i = 0; i < amount; i++) {
        template[i.toString()] = "0";
        answers[i.toString()] = "0";

        questionsComponents.push(
            <Question
                key={i.toString()}
                number={(i + 1).toString()}
                template={template[i.toString()]}
                answer={answers[i.toString()]}
                changeTemplate={handleChangeTemplate}
                changeAnswer={handleChangeAnswers}
            />
        );
    }
    return <div className="grid">{questionsComponents}</div>;
};

QuestionsWrapper.propTypes = {
    handleChangeAnswers: PropTypes.func.isRequired,
    handleChangeTemplate: PropTypes.func.isRequired,
}

export default QuestionsWrapper;
