import "./FinalGrade.css";

const FinalGrade = (props) => {
    return (
        <div className="grade">
            <button className="calc-grade" onClick={props.calculateGrade}>
                Calcular nota
            </button>
            <p className="nota">Nota: {0}</p>
        </div>
    );
};

export default FinalGrade;
