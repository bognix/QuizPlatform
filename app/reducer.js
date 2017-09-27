import { combineReducers } from 'redux';
import { ACTIONS, SCREENS } from './consts';

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
    },
    results: []
};

const questionsReducer = (state = initialState.questions, { payload, type }) => {
    switch (type) {
    case ACTIONS.QUESTION_SELECT_ANSWER:
        return {
            ...state,
            [payload.question.id]: {
                ...payload.question,
                selectedAnswer: payload.answer.id
            }
        };
    }

    return state;
};

const resultsReducer = (state = initialState.results, { payload, type }) => {
    switch (type) {
    case ACTIONS.QUIZ_SUBMIT:
        return [
            ...state,
            payload.results
        ];
    }

    return state;
};


function navigationReducer() {
    return {
        index: 0,
        routes: [
            {
                key: SCREENS.QUESTIONS_LIST,
                routeName: SCREENS.QUESTIONS_LIST
            }
        ]
    };
}

export default combineReducers({
    questions: questionsReducer,
    results: resultsReducer,
    navigation: navigationReducer
});
