import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PokeProvider from './context/PokeContext';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1';


export default function App() {
  return (
      <PokeProvider>
        <NavigationContainer>
          <BottomTabNavigator1/>
        </NavigationContainer>
      </PokeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
