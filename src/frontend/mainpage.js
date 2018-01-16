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
      },
      style: {
        backgroundColor: '#26e460',
        padding: 8,
      },
      tabStyle: {
        padding: 3,
      },
    },
  });

  export default Mainpage;