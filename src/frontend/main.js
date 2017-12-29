import React , {Component} from 'react';
import { View , Text } from 'react-native';
import { MapView } from 'expo';



//map Component

const MapComponent = ({region})=>{
  return(
    <MapView
    style={{ flex: 1 }}
    provider={MapView.PROVIDER_GOOGLE}
    region={region}
    >
    <MapView.Marker
     coordinate={region}
     pinColor="green"
    />
    </MapView>
  )
};


export default class Main extends Component{
  constructor(props){
    super(props);

  }

  render(){
    let region = {
      latitude: null,
      longitude: null,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

function success(pos) {
   console.log("region data: "+region.latitude);
  var crd = pos.coords;
  region.latitude = crd.latitude;
  region.longitude = crd.longitude;


  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
};



console.log(navigator.geolocation.getCurrentPosition(success));
    return(
      <MapComponent region={region}/>
    );
  }

}
