import {combineReducers} from 'redux';
import {QUESTION_SELECT_ANSWER} from './consts';

const initialState = {
    questions: {
        1: {
            id: 1,
            text: 'To jest moje pierwsze pytanie',
            answers: {
                1: {
                    id: 1,
                    text: 'To jest pierwsza odpowiedz',
                    isCorrect: false
                },
                2: {
                    id: 2,
                    text: 'To jest druga odpowiedz',
                    isCorrect: true
                }
            }
        },
        2: {
            id: 2,
            text: 'To jest moje drugie pytanie',
            answers: {
                3: {
                    id: 3,
                    text: 'To jest pierwsza odpowiedz',
                    isCorrect: true
                },
                4: {
                    id: 4,
                    text: 'To jest czwarta odpowiedz',
                    isCorrect: false
                }
            }
        }
    }
};

const questionsReducer = (state = initialState.questions, {payload, type}) => {
    switch(type) {
    case QUESTION_SELECT_ANSWER:
        return {
            ...state,
            [payload.question.id]: {
                ...payload.question,
                answers: {
                    ...state[payload.question.id].answers,
                    [payload.answer.id]: {
                        ...payload.answer,
                        selected: true
                    }
                }
            }
        };
    }

    return state;
};

export default combineReducers({
    questions: questionsReducer,
});
