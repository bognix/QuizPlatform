import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './app/reducer';
import StatefulAppNavigator from './app/navigators';


const store = createStore(reducer, applyMiddleware(thunk, reduxLogger));

const AppNav = () => <StatefulAppNavigator/>;

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNav/>
            </Provider>
        );
    }
}
