  import { TabNavigator } from 'react-navigation';
  import Map from './map';
  import List from './list';

  const Mainpage = TabNavigator({
    Map: {screen: Map},
    List: {screen: List},
   }, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      indicatorStyle: {
          backgroundColor: 'white',
          marginBottom: '3%',
          height: '1%',
      },
      style: {
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: '#26e460',
        padding: 8,
        marginRight: '4%',
        marginLeft:  '4%',
        height: '10%',
      },
    },
  });

  export default Mainpage;
