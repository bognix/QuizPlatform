import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Answer from './Answer';

const Question = ({ question, onAnswerSelect }) => {
    const onAnswerSelectWithQuestion = (answer) => {
        return onAnswerSelect({
            answer,
            question
        });
    };

    return (
        <View>
            <Text style={styles.question}>{question.text}</Text>
            <FlatList
                data={Object.values(question.answers)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Answer answer={item} onAnswerSelect={onAnswerSelectWithQuestion} selected={question.selectedAnswer === item.id}/>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    question: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

Question.propTypes = {
    question: PropTypes.object.isRequired,
    onAnswerSelect: PropTypes.func.isRequired
};

export default Question;
