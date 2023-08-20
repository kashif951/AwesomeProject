import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Inventory } from './inventory';
import { Modal } from './dhaModal';


const FirstRoute = () => (
  <Inventory />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'lightblue' }} >
   
  </View>

);

const ThreeRoute = () => (
     <View style={{ flex: 1, backgroundColor: 'pink' }} />
   );

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  three: ThreeRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Lnventory' },
    { key: 'second', title: 'Shop Info' },
    { key: 'three', title: 'Metrics' },
  ]);

  const renderTabBar = props => (
  	<TabBar
     	 {...props}
      	activeColor={'#EA8C00'}
      	inactiveColor={'#838FA0'}
          style={{backgroundColor:'white'}}
  	/>
  );

  return (
    <TabView
    renderTabBar={renderTabBar} 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}