import PropTypes from "prop-types";
import Card from "../UI/Card";
import InputField from "./InputField";
import "./Question.css";

const Question = ({ number, data, onUpdate }) => {
    const templateChangeHandler = (value) => {
        onUpdate("template", value);
    };

    const answerChangeHandler = (value) => {
        onUpdate("answer", value);
    };

    return (
        <Card className="wrapper">
            <h1 className="number">
                Questão {number > 9 ? number : "0" + number}
            </h1>
            <div className="inputs">
                <InputField
                    className="gabarito input"
                    name="Gabarito"
                    changeValue={templateChangeHandler}
                    value={data.template}
                />
                <InputField
                    className="resposta input"
                    name="Resposta"
                    changeValue={answerChangeHandler}
                    value={data.answer}
                />
            </div>
        </Card>
    );
};

Question.propTypes = {
    number: PropTypes.number.isRequired,
    data: PropTypes.shape({
        template: PropTypes.number,
        answer: PropTypes.number,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default Question;
