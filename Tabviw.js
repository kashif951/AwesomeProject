import * as React from 'react';
import { View, useWindowDimensions ,Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Offer  from './Offer';
import { Hold } from './Hold';

const Call = [
  {
    rectangleimage: require('./Assets/giisty/Rectangle.png'),
    azlan: 'Azlan',
    active: 'Active',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
  {
    rectangleimage: require('./Assets/giisty/Rectangle1.png'),
    azlan: 'Manahil',
    active: 'Pending',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
  {
    rectangleimage: require('./Assets/giisty/Rectangle2.png'),
    azlan: 'Manahil',
    active: 'Active',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
  {
    rectangleimage: require('./Assets/giisty/Rectangle3.png'),
    azlan: 'Manahil',
    active: 'Pending',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
  {
    rectangleimage: require('./Assets/giisty/Rectangle4.png'),
    azlan: 'Manahil',
    active: 'Active',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
];

const Apps = [
  {
    rectangleimage: require('./Assets/giisty/Rectangle.png'),
    azlan: 'Azlan',
    active: '$50.000',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
  {
    rectangleimage: require('./Assets/giisty/Rectangle1.png'),
    azlan: 'Manahil',
    active: '$43.000',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
];

const Canceled = [
  {
    rectangleimage: require('./Assets/giisty/Rectangle.png'),
    azlan: 'Azlan',
    active: 'Canceled',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
  {
    rectangleimage: require('./Assets/giisty/Rectangle1.png'),
    azlan: 'Manahil',
    active: 'Canceled',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
  {
    rectangleimage: require('./Assets/giisty/Rectangle2.png'),
    azlan: 'Manahil',
    active: 'Canceled',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
  {
    rectangleimage: require('./Assets/giisty/Rectangle3.png'),
    azlan: 'Manahil',
    active: 'Canceled',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
  {
    rectangleimage: require('./Assets/giisty/Rectangle4.png'),
    azlan: 'Manahil',
    active:'Canceled',
    number: 'AMB2345359',
    date: '20, July 2023',
  },
];




const FirstRoute = () => (
    <Offer  data={Call}/>
   
   
    
);

const SecondRoute = () => (
  < Hold/>

   
  

);

const ThreeRoute = () => (
  <Offer data={Apps} />

   );

   const FourRoute = () => (
    <Offer data={Canceled}/>

  );

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  three: ThreeRoute,
  four: FourRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Offers Received' },
    { key: 'second', title: 'Hold offers' },
    { key: 'three', title: 'Completed offers' },
    { key: 'four', title: 'Canceled' },
  ]);

  const renderTabBar = props => (
  	<TabBar
     	 {...props}
      	activeColor={'#EA8C00'}
      	inactiveColor={'#838FA0'}
          style={{backgroundColor:'#FFF'}}
          renderLabel={({route, focused, color}) => (
            <View>
              {focused == false ? (
                <Text style={{color: '#838FA0'}}>
                  {route.title}
                </Text>
              ) : (
                  <Text style={ {color: '#EA8C00'}}>
                    {route.title}
                  </Text>
              )}
            </View>
          )}
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