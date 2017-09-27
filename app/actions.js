import {QUESTION_SELECT_ANSWER, QUIZ_SUBMIT} from './consts';

export const selectAnswer = (payload) => {
    return (dispatch) => {
        return dispatch({
            type: QUESTION_SELECT_ANSWER,
            payload
        });
    };
};

export const submitQuiz = (payload) => {
    return (dispatch) => {
        return dispatch({
            type: QUIZ_SUBMIT,
            payload: calculateResults(payload)
        });
    };
};

const calculateResults = (questions) => {
    const result = questions.reduce((result, question) => {
        let {correct, solved} = result;

        if (question.selectedAnswer) {
            solved = solved + 1;
            if (question.answers[question.selectedAnswer].isCorrect) {
                correct = correct + 1;
            }
        }

        return {
            correct,
            solved
        };
    }, {
        correct: 0,
        solved: 0
    });

    return {
        ...result,
        total: questions.length
    };
};
