import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import {Image} from 'react-native';
import Recipe from '../Screens/Recipe';
import WishList from '../Screens/WishList';
import User from '../Screens/User';

const Tabs = createBottomTabNavigator();

const Tab = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assests/icons/cutlery.png')}
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
      <Tabs.Screen name="WishList" component={WishList} />
      <Tabs.Screen name="User" component={User} />
    </Tabs.Navigator>
  );
};

export default Tab;
