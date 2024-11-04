import PropTypes from "prop-types";
import Card from "../UI/Card";
import "./InputField.css";

const InputField = ({ className, name, value, changeValue }) => {
    const handleChange = (e) => {
        let inputValue = e.target.value;

        // Remove leading zero if it's followed by another number
        if (inputValue.length > 1 && inputValue.startsWith("0")) {
            inputValue = inputValue.slice(1);
        }

        // Convert the cleaned input to a number and call changeValue
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
