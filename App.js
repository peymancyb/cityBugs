import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './src/frontend/main';
import Homepage from './src/frontend/homepage';
import Mainpage from './src/frontend/mainpage';


const App = StackNavigator({
  Language:{
    screen: Homepage,
    navigationOptions:{
      headerStyle:{
        backgroundColor:"#fdfdfd",
        borderBottomWidth:0,
        elevation:0,
        shadowOpacity:0,
      },
    },
  },
  Home: {
    screen: Mainpage,
  },
  Main:{
    screen: Main
  },
},
  {
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
  }
});

export default App ;
