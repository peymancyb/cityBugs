import React , {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { MapView } from 'expo';
import styles from '../frontend/style';


//map Component
const MapComponent = ({region})=>{
  return(
      <MapView
        style={styles.container}
        provider={MapView.PROVIDER_GOOGLE}
        region={region}
      >
        <MapView.Marker
         coordinate={region}
         pinColor="green"
        />
      </MapView>
  );
};


export {MapComponent};
