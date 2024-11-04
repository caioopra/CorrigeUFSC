import PropTypes from "prop-types";
import Card from "../UI/Card";
import "./InputField.css";

const InputField = ({ className, name, value, changeValue }) => {
    const handleChange = (e) => {
        const numValue = e.target.value === "" ? 0 : Number(e.target.value);
        changeValue(numValue); // Pass a number directly
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
    value: PropTypes.number.isRequired, // Expect a number
    changeValue: PropTypes.func.isRequired,
};

export default InputField;
