import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface TexInputProps {
    value: string;
    onChange: (text: string) => void;
    placeholder: string;
}

export const TexInput: React.FC<TexInputProps> = ({ value, onChange, placeholder }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            keyboardType="numeric"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
        paddingHorizontal: 10,
        width: '80%',
        borderRadius: 5,
    },
});


