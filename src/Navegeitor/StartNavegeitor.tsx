
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenOne } from '../Screen/ScreenOne';
import { ScreenTwo } from '../Screen/ScreenTwo';


const Stack = createStackNavigator();

export const StartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'pink'
        },
      }}
      initialRouteName="Bienvenido"
    >
      <Stack.Screen name="Bienvenido" component={ScreenOne} />
      <Stack.Screen name="Formulario" component={ScreenTwo} />
    </Stack.Navigator>
  );
};

export default StartNavigator;
