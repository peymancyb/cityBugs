import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './src/frontend/main';


const App = StackNavigator({
  Main:{
    screen: Main
  },
});

export default App ;
