import React from 'react';
import { FlatList, View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

import Question from './Question';

const QuestionsList = ({ questions, submitQuiz, ...actions }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={questions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Question question={item} {...actions} />}
            />
            <TouchableHighlight onPress={submitQuiz}>
                <Text>Zakończ</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

QuestionsList.propTypes = {
    questions: PropTypes.array.isRequired,
    submitQuiz: PropTypes.func.isRequired
};

export default QuestionsList;
