import React, {Component} from 'react';
import { View,
         TextInput,
         Text } from 'react-native';
import styles from '../frontend/style';

export default class CommonTextInput extends Component {
  render() {
    return (
        <View style={styles.inputView}>
          <TextInput underlineColorAndroid='transparent'
                    style={styles.input}
                    placeholder = "What's up?"/>
        </View>
    );
  }
}
