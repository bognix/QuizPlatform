import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { SCREENS } from './consts';
import QuestionsList from './containers/QuestionsList';
import Test from './components/Test';


export const AppNavigator = StackNavigator({
    [SCREENS.QUESTIONS_LIST]: { screen: QuestionsList },
}, {
    swipeEnabled: false,
    initialRouteName: SCREENS.QUESTIONS_LIST
});

const AppWithNavigationState = ({ dispatch, navigation }) => {
    console.log(navigation, '....navigation')
    return (
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
    );
};

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    navigation: state.navigation,
});

const container = connect(mapStateToProps)(AppWithNavigationState);
export default container;
