import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { SCREENS } from './consts';
import QuestionsList from './containers/QuestionsList';


export const AppNavigator = StackNavigator({
    [SCREENS.QUESTIONS_LIST]: { screen: QuestionsList },
});

const AppWithNavigationState = ({ dispatch, navigation}) => {
    return (
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })}/>
    );
};

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    navigation: state.navigation,
});

export default connect(mapStateToProps)(AppWithNavigationState);
