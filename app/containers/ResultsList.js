import {connect} from 'react-redux';
import ResultsListComponent from '../components/ResultsList';

const mapStateToProps = (state) => {
    return {
        results: state.results || []
    };
};

const ResultsList = connect(mapStateToProps)(ResultsListComponent);

ResultsList.navigationOptions = {
    title: 'Twoje Wyniki',
};

export default ResultsList;
