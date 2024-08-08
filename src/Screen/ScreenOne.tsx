// ScreenOne.js
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


interface Props extends StackScreenProps<any,any>{}

export const ScreenOne = ({navigation}:Props) => {
  return (
    <View>
      <Text>Bienvenido!!</Text>
      <Image 
        source={require('../../assets/images/que-son-Aplicaciones-Moviles.png')} 
        style={styles.image} 
      />

    <TouchableOpacity
     onPress={() => navigation.navigate('Formulario')}> 
      <Text style={styles.button}>Acceder</Text> 
      </TouchableOpacity>
    </View>
  );
};  

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff', 
    padding: 10,
    borderRadius: 9,
    alignItems: 'center', 
    width:'30%'
  }
});

