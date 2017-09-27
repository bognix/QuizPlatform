import {connect} from 'react-redux';
import QuestionsListComponent from '../components/QuestionsList';
import {bindActionCreators} from 'redux';
import {selectAnswer, submitQuiz} from '../actions';


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


const QuestionsList = connect(mapStateToProps, mapDispatchToProps)(QuestionsListComponent);

QuestionsList.navigationOptions = {
    title: 'Home Screen',
};

export default QuestionsList;
