import React , {Component} from 'react';
import { View , Text , Dimensions, Alert } from 'react-native';
import styles from './style';
import { MapComponent } from '../components/MapContainer';
import { MapView } from 'expo';
// import MapView from 'react-native-maps';

const {width , height} = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const ASPECT_RATIO = width/height;


export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      currentLocation:{
        latitude: 40.1792,
        longitude: 44.4991,
        longitudeDelta:0.0421,
        latitudeDelta:0.0922,
      },
      mapRegion:{
        latitude:40.1792,
        longitude:44.4991,
        longitudeDelta:0.0421,
        latitudeDelta:0.0922,
      },
      markers: [{
          key:1,
          title: 'superman',
          description: "ready for fight",
          coordinates: {
            latitude: 40.1792,
            longitude: 44.4991
          },
        },
        {
          key:2,
          title: 'batman',
          description: "wants fight",
          coordinates: {
            latitude: 40.200,
            longitude: 44.4992
          },
        }]
    }
    this._onRegionChange=this._onRegionChange.bind(this);
    this._currentLocation=this._currentLocation.bind(this);
  }

_onRegionChange(region){
  this.setState(()=>({
    mapRegion: region
  }));
}

_currentLocation(){
  navigator.geolocation.getCurrentPosition(
    //success
    (position)=>{
    let currentPosition = {
      latitude:position.coords.latitude,
      longitude:position.coords.longitude,
      longitudeDelta:0.0421,
      latitudeDelta:0.0922,
    };
    this.setState({
      currentLocation: currentPosition
    });
    // console.log("your location is:\n"+position.coords.latitude+"\n"+position.coords.longitude);
  },
  //error handler
  (error)=>{
    if(error.code == "E_LOCATION_SERVICES_DISABLED"){
      Alert.alert(
        "CityBugs",
        "CityBugs needs to know your location, please turn on your Location service!",
        [
          {text:"OK",onPress: ()=>Alert.alert(
            "CityBugs",
            "Thank you!",
            [
              {text:"OK"},
            ]
          )},
          {text:"Ask me later"},
        ],
        { cancelable: false }
      );
    }
  },
  //options
  {enableHighAccuracy:true, timeout:5000 , maximumAge:0}
);
}

componentDidMount(){
  this._currentLocation();
}
  render(){
    // console.log(this.state.currentLocation);
    return(
        <MapView
          style={{ flex: 1 }}
          showsUserLocation={true}
          followUserLocation={true}
          zoomEnabled={true}
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={this.state.currentLocation}
          onRegionChange={this._onRegionChange}
        >
          {this.state.markers.map((marker)=>(
            <MapView.Marker
              coordinate={marker.coordinates}
              key={marker.key}
              title={marker.title}
              description={marker.description}
            />
          ),
        )}
        </MapView>
    );
  }

}
