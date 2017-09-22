import {connect} from 'react-redux';
import QuestionsListComponent from '../components/QuestionsList';
import {bindActionCreators} from 'redux';
import {selectAnswer} from '../actions';


const mapStateToProps = (state) => {
    const {questions: rawQuestions} = state;
    const questions = Object.values(rawQuestions).map((question) => {
        return {
            ...question,
            answers: Object.values(question.answers)
        };
    });

    return {
        questions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAnswerSelect: bindActionCreators(selectAnswer, dispatch)
    };
};


const QuestionsList = connect(mapStateToProps, mapDispatchToProps)(QuestionsListComponent);

export default QuestionsList;
