import React , {Component} from 'react';
import { View , Text , Dimensions} from 'react-native';
import styles from './style';
import { MapComponent } from '../components/MapContainer';
import { MapView } from 'expo';
// import MapView from 'react-native-maps';

const {width , height} = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const ASPECT_RATIO = width/height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;


export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      mapRegion:{
        latitude:40.1792,
        longitude:44.4991,
        longitudeDelta:LONGITUDE_DELTA,
        latitudeDelta:LATITUDE_DELTA,
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
  }

_onRegionChange(region){
  this.setState(()=>({
    mapRegion: region
  }));
}

componentWillUnmount(){

}

  render(){
    return(
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        followUserLocation={true}
        zoomEnabled={true}
        provider={MapView.PROVIDER_GOOGLE}
        region={this.state.mapRegion}
        onRegionChange={this._onRegionChange}
      >
        {this.state.markers.map((marker) => (
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
