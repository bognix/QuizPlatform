import {QUESTION_SELECT_ANSWER} from './consts';

export const selectAnswer = (payload) => {
    return (dispatch) => {
        return dispatch({
            type: QUESTION_SELECT_ANSWER,
            payload
        });
    };
};
