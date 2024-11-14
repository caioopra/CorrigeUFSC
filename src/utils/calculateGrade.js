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

function getScore(template, answer, availableAlternatives) {
    const scores = [];

    for (let i = 0; i < Object.keys(template).length; i++) {
        scores.push(
            getIndividualScore(template[i], answer[i], availableAlternatives)
        );
    }

    return scores;
}

function getIndividualScore(template, answer, availableAlternatives) {
    const correct_marked_as_correct = [];
    const incorrect_marked_as_correct = [];

    availableAlternatives.forEach((alternative) => {
        if (answer.includes(alternative)) {
            if (template.includes(alternative)) {
                correct_marked_as_correct.push(alternative);
            } else {
                incorrect_marked_as_correct.push(alternative);
            }
        }
    });

    if (
        correct_marked_as_correct.length <= incorrect_marked_as_correct.length
    ) {
        return 0.0;
    }

    const amount_of_alternatives = availableAlternatives.length;

    const term =
        template.length -
        (correct_marked_as_correct.length - incorrect_marked_as_correct.length);

    return parseFloat(
        ((amount_of_alternatives - term) / amount_of_alternatives).toFixed(3)
    );
}

/*
 * gabarito and respostas both are objects in the structure:
 * {questionNumber: value, ...}
 * to calculate, each wrong question eliminates one correct;
 * the pontuation for each exam is the amount of questions;
 */
function calculateGrade(questionsData, amountOfQuestions, biggestAlternative) {
    const availableAlternatives = getAvaliableAlternatives(biggestAlternative);

    const templates_array = questionsData.map(
        ({ template, answer }) => template
    );
    const answers_array = questionsData.map(({ template, answer }) => answer);

    const templateOptions = getAlternatives(
        templates_array,
        availableAlternatives
    );

    const answerOptions = getAlternatives(answers_array, availableAlternatives);

    return getScore(templateOptions, answerOptions, availableAlternatives);
}

export default calculateGrade;
