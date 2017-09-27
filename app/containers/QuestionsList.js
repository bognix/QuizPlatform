import {connect} from 'react-redux';
import QuestionsListComponent from '../components/QuestionsList';
import {bindActionCreators} from 'redux';
import {selectAnswer, submitQuiz} from '../actions';


const mapStateToProps = (state) => {
    const {questions} = state;

    return {
        questions: Object.values(questions)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAnswerSelect: bindActionCreators(selectAnswer, dispatch),
        submitQuiz: bindActionCreators(submitQuiz, dispatch)
    };
};


const QuestionsList = connect(mapStateToProps, mapDispatchToProps)(QuestionsListComponent);

export default QuestionsList;
