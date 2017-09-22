import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Question from './Question';

const QuestionsList = ({questions, ...actions}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={questions}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Question key={item.id} question={item} {...actions}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
});

QuestionsList.propTypes = {
    questions: PropTypes.array
};

export default QuestionsList;
