import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  Pagecontainer: {
      flex: 1,
      justifyContent: 'center',
  },
  map: {
      flex: 1,
  },
  locationTextStyle: {
    position: 'absolute',
    top: '11%',
    left: '4%',
    right: '4%',
  },
  inputView: {
      position: 'absolute',
      height: '20%',
      top: '18%',
      left: '4%',
      right: '4%',
      shadowOpacity: 0.75,
  },
  input: {
      padding: 20,
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
  },
});


export default styles;
