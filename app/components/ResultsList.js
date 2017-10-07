import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const ResultsList = ({ results}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                keyExtractor={(item, index) => index}
                renderItem={() => <Text>Hello</Text>}
            />
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

ResultsList.propTypes = {
    results: PropTypes.array.isRequired,
};

export default ResultsList;
