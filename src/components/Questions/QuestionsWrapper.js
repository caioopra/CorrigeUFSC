import Question from "./Question";
import "./QuestionsWrapper.css";

const QuestionsWrapper = (props) => {
    const questionsComponents = [];

    for (let i = 0; i < props.amount; i++) {
        props.template[i.toString()] = "0";
        props.answers[i.toString()] = "0";

        questionsComponents.push(
            <Question
                key={i.toString()}
                number={(i + 1).toString()}
                template={props.template.i}
                answer={props.answers.i}
                changeTemplate={props.templateHandler}
                changeAnswer={props.answerHandler}
            />
        );
    }
    return <div className="grid">{questionsComponents}</div>;
};

export default QuestionsWrapper;
