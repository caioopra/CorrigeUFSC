import PropTypes from "prop-types";
import Card from "../UI/Card";
import "./InputField.css";

const InputField = ({ className, name, value, changeValue }) => {
    const handleChange = (e) => {
        let inputValue = e.target.value;

        if (inputValue.length > 1 && inputValue.startsWith("0")) {
            inputValue = inputValue.slice(1);
        }

        changeValue(Number(inputValue));
    };

    const handleBlur = (e) => {
        let inputValue = e.target.value;

        if (inputValue.length > 1 && inputValue.startsWith("0")) {
            inputValue = inputValue.slice(1);
        }

        changeValue(Number(inputValue));
    };

    return (
        <Card className={className}>
            <p>{name}</p>
            <input
                type="number"
                min={0}
                max={99}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </Card>
    );
};

InputField.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    changeValue: PropTypes.func.isRequired,
};

export default InputField;