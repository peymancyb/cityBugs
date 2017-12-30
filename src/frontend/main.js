import React , {Component} from 'react';
import { View , Text } from 'react-native';
import styles from './style';
import {MapComponent} from '../components/MapContainer';



const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;




export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      Region:{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition: {
        latitude:0,
        longitude:0,
      },
    };
  }

watchID: ?number = null ;

componentDidMount(){
//   navigator.geolocation.getCurrentPosition((position)=>{
//     var lat = parseFloat(position.coords.latitude);
//     var long = parseFloat(position.coords.longitude);
//     var initialRegion = {
//       latitude: lat,
//       longitude: long,
//       latitudeDelta: LATITUDE_DELTA,
//       longitudeDelta: LONGITUDE_DELTA,
//     };
//     this.setState({Region: initialRegion});
//     this.setState({markerPosition: initialRegion});
//   },
//   (error) => alert(JSON.stringify(error)),
//   {enableHighAccuracy: true ,timeout:20000 , maximumAge:1000}
// );

  // this.watchID = navigator.geolocation.watchPosition((position)=>{
  //   var lat = parseFloat(position.coords.latitude);
  //   var long = parseFloat(position.coords.longitude);
  //   var lastRegion = {
  //     latitude:lat,
  //     longitude:long,
  //     latitudeDelta: LATITUDE_DELTA,
  //     longitudeDelta: LONGITUDE_DELTA,
  //   };
  //   this.setState({Region: lastRegion});
  //   this.setState({markerPosition: lastRegion});
  // });
}

componentWillUnmount(){
  // navigator.geolocation.clearWatch(this.watchID);
}



  render(){
    return(
      <View style={styles.container}>
         <MapComponent region={this.state.Region}/>
      </View>
    );
  }

}
