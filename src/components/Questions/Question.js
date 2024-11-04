import PropTypes from "prop-types";
import Card from "../UI/Card";
import InputField from "./InputField";
import "./Question.css";

const Question = ({ number, template, answer, changeTemplate, changeAnswer }) => {
    const templateChangeHandler = (value) => {
        changeTemplate(value, (parseInt(number) - 1).toString());
    };

    const answerChangeHandler = (value) => {
        changeAnswer(value, (parseInt(number) - 1).toString());
    };

    return (
        <Card className="wrapper">
            <h1 className="number">
                Questão {parseInt(number) > 9 ? number : "0" + number}
            </h1>
            <div className="inputs">
                <InputField
                    className="gabarito input"
                    name="Gabarito"
                    changeValue={templateChangeHandler}
                    value={template} // Pass number as value
                />
                <InputField
                    className="resposta input"
                    name="Resposta"
                    changeValue={answerChangeHandler}
                    value={answer} // Pass number as value
                />
            </div>
        </Card>
    );
};

Question.propTypes = {
    number: PropTypes.string.isRequired,
    template: PropTypes.number.isRequired, // Expect a number
    answer: PropTypes.number.isRequired, // Expect a number
    changeTemplate: PropTypes.func.isRequired,
    changeAnswer: PropTypes.func.isRequired,
};

export default Question;
