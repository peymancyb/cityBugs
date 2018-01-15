import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';




export default class Help extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Help',
  };
  render() {
    return (
      <View>
        <Text>Help</Text>
      </View>
    );
  }
}
