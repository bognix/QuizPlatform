import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import Answer from './Answer';

const Question = ({question, onAnswerSelect}) => {
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
                data={question.answers}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Answer answer={item} onAnswerSelect={onAnswerSelectWithQuestion}/>}
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
    id: PropTypes.number,
    text: PropTypes.string,
    answers: PropTypes.array
};

export default Question;
