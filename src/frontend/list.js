import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './style';
import {FontAwesome} from '@expo/vector-icons';
import {NavFontAwesome} from '../components/commonComponents';
export default class List extends Component{
  constructor(props){
    super(props);

  }
  static navigationOptions ={
    tabBarLabel: "List",
  };
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <NavFontAwesome />
        </View>
      </View>
    );
  }
}
