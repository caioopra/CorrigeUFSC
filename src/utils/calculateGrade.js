function getAlternatives(objetoValores, availableAlternatives) {
    const alternatives = {};

    Object.keys(objetoValores).forEach((key) => {
        const checkedAlternatives = [];
        let currentSum = objetoValores[key];

        availableAlternatives.forEach((alternative) => {
            if (currentSum >= alternative) {
                checkedAlternatives.push(alternative);
                currentSum -= alternative;
            }
        });

        alternatives[key] = checkedAlternatives;
    });

    return alternatives;
}

function getAvaliableAlternatives(biggestAlternative) {
    const alternatives = [];
    for (let i = biggestAlternative; i >= 1; i = i / 2) {
        alternatives.push(i);
    }

    return alternatives;
}


/*
 * gabarito and respostas both are objects in the structure:
 * {questionNumber: value, ...}
 * to calculate, each wrong question eliminates one correct;
 * the pontuation for each exam is the amount of questions;
 */
function calculateGrade(
    questionsData,
    amountOfQuestions,
    biggestAlternative
) {
    const availableAlternatives = getAvaliableAlternatives(biggestAlternative);
    console.log(availableAlternatives)

    const alternativasGabarito = getAlternatives(
        questionsData.map(({ template, answer }) => template),
        availableAlternatives
    );
    console.log("Alternativas gabarito: ", alternativasGabarito)

    const alternativasAssinaladas = getAlternatives(
        questionsData.map(({ template, answer }) => answer),
        availableAlternatives
    );
    console.log("Alternativas assinaladas: ", alternativasAssinaladas)

}

export default calculateGrade;
