import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import ResultDisplay from '../Component/Result';

export const ScreenTwo = () => {
  const [numerator, setNumerator] = useState<string>(''); // Initialize state
  const [denominator, setDenominator] = useState<string>(''); // Initialize state
  const [result, setResult] = useState<string>(''); // Initialize state

  const Divide = () => {
    const num = parseFloat(numerator);
    const denom = parseFloat(denominator);

    if (denom === 0) {
      if (num === 0) {
        setResult('INDETERMINACIÓN');
      } else {
        setResult('NO EXISTE DIVISIÓN PARA CERO'); 
      }
    } else {
      setResult(`El resultado es: ${num / denom}`); 
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={numerator}
        onChangeText={setNumerator}
        placeholder="Número 1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={denominator}
        onChangeText={setDenominator}
        placeholder="Número 2"
        keyboardType="numeric"
      />
      <View style={styles.   BottonDividir}> 
      <Button title="Dividir" onPress={Divide} />
      <ResultDisplay result={result} /> 
         </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 8,
    
  },
  BottonDividir:{
    width:'30%',
    alignItems:'center'
    
  }
});
