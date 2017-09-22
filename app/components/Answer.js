import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

const Answer = ({answer, onAnswerSelect}) => {
    return (
        <View>
            <Touchable onPress={() => onAnswerSelect(answer)} underlayColor="blue">
                <Text style={styles.answer}>{answer.text}</Text>
            </Touchable>
        </View>
    );
};

const Touchable = ({onPress, children}) => {
    return (
        <TouchableHighlight onPress={onPress}>
            {children}
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    answer: {
        padding: 10,
        margin: 5,
        height: 44,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
});

Answer.propTypes = {
    text: PropTypes.string,
};

export default Answer;
