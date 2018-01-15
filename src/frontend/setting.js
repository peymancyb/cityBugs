import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


export default class Setting extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Setting',
  };

  render() {
    return (
      <View>
        <Text>Setting</Text>
      </View>
    );
  }
}
