import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ biggest, amount, changebiggestAlternative, changeAmount }) => {
    const handleChangeBiggest = (event) => {
        let exponent = Math.log2(biggest);

        if (biggest < event.target.value && exponent < 6) {
            exponent++;
        } else if (biggest > event.target.value && exponent > 0) {
            exponent--;
        }

        changebiggestAlternative(Math.pow(2, exponent));
    };

    const handleChangeAmount = (event) => {
        let value = event.target.value;
        if (event.target.value > 99) {
            value = 99;
        }
        changeAmount(value);
    };

    return (
        <div className="header">
            <button className="erase-template">Apagar gabarito atual</button>

            <div className="question-number">
                <p className="input-label">Número de Questões</p>
                <input
                    value={amount}
                    type="number"
                    className="header-input"
                    max="99"
                    onChange={handleChangeAmount}
                />
            </div>

            <div className="biggest-value">
                <p className="input-label">Maior alternativa</p>
                <input
                    value={biggest}
                    type="number"
                    className="header-input"
                    max="99"
                    onChange={handleChangeBiggest}
                />
            </div>

            <button className="erase-student">
                Apagar respostas do aluno atual
            </button>
        </div>
    );
};

Header.propTypes = {
    biggest: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    changebiggestAlternative: PropTypes.func.isRequired,
    changeAmount: PropTypes.func.isRequired,
};

export default Header;
