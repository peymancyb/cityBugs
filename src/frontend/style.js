import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  homepageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
  cityBugLOGO: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 300
  },
  facebookLOGO: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 300
  },
  citybugIMAGE: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 500
  }
});


export default styles;
