import React from 'react';
import { StyleSheet, View } from 'react-native';
import QuestionsList from './app/containers/QuestionsList';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './app/reducer';

const store = createStore(reducer, applyMiddleware(thunk, reduxLogger));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <QuestionsList />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
