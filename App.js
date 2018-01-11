import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './src/frontend/main';
import Homepage from './src/frontend/homepage';


const App = StackNavigator({
  // Language:{
  //   screen: Homepage,
  //   navigationOptions:{
  //     headerStyle:{
  //       backgroundColor:"#fdfdfd",
  //
  //     },
  //   },
  // },
  Main:{
    screen: Main
  },
},
{
  //empty
});

export default App ;
