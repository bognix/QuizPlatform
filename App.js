import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './app/reducer';
import StatefulAppNavigator from './app/navigators';



const store = createStore(reducer, applyMiddleware(thunk, reduxLogger));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <StatefulAppNavigator />
                    <Text>dupa</Text>
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
