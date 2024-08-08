import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface ResultDisplayProps {
    result: string; 
}


const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => (
    <Text style={styles.resultText}>{result}</Text>
);

const styles = StyleSheet.create({
    resultText: {
        fontSize: 20,
        color: 'black',
        marginTop: 10,
    } as TextStyle, 
});

export default ResultDisplay;
