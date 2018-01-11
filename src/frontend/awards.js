import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


export default class Awards extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Awards',
  };

  render() {
    return (
      <View>
        <Text>Awards</Text>
      </View>
    );
  }
}
