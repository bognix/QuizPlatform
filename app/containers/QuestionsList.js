import {connect} from 'react-redux';
import QuestionsListComponent from '../components/QuestionsList';
import {bindActionCreators} from 'redux';
import {selectAnswer, submitQuiz} from '../actions';
import { SCREENS } from '../consts';


const mapStateToProps = (state) => {
    return {
        questions: Object.values(state.questions)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAnswerSelect: bindActionCreators(selectAnswer, dispatch),
        submitQuiz: bindActionCreators(submitQuiz, dispatch)
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        submitQuiz: () => {
            ownProps.navigation.dispatch({type: SCREENS.RESULTS_LIST});
            return dispatchProps.submitQuiz(stateProps.questions);
        }
    };
};


const QuestionsList = connect(mapStateToProps, mapDispatchToProps, mergeProps)(QuestionsListComponent);

QuestionsList.navigationOptions = {
    title: 'Pytania',
};

export default QuestionsList;
