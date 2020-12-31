import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import {Image} from 'react-native';

const Tabs = createBottomTabNavigator();

const Tab = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/cutlery.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#FC6D3F' : '#CDCDD2',
              }}
            />
          ),
        }}
        component={Home}
      />
      <Tabs.Screen name="Recipe" component={Home} />
      <Tabs.Screen name="WishList" component={Home} />
      <Tabs.Screen name="User" component={Home} />
    </Tabs.Navigator>
  );
};

export default Tab;
