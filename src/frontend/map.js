  import React, {Component} from 'react';
  import { View,
           Text } from 'react-native';
  import MapScreen from '../components/MAP';
  import CommonTextInput from '../components/commonTextInput';
  import styles from './style';

  export default class Map extends Component {
    constructor(props) {
      super(props);
      this.state = {
        locationText: 'Current Location Text',
      }
    }
    render() {
      return (
        <View style={styles.Pagecontainer}>
          <MapScreen  style={styles.map} />
          <Text style = {styles.locationTextStyle} >{this.state.locationText}</Text>
          <CommonTextInput />
        </View>
      );
    }
  }
