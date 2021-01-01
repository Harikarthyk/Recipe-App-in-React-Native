import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import {Image, StyleSheet, Text} from 'react-native';
import Recipe from '../Screens/Recipe';
import WishList from '../Screens/WishList';
import User from '../Screens/User';

const Tabs = createBottomTabNavigator();

const Tab = () => {
  return (
    <Tabs.Navigator initialRouteName="Home">
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
                tintColor: focused ? '#2DC268' : '#CDCDD2',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#CDCDD2',
                fontSize: 10,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Home
            </Text>
          ),
        }}
        component={Home}
      />
      <Tabs.Screen
        name="WishList"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assests/icons/like.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#2DC268' : '#CDCDD2',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#CDCDD2',
                fontSize: 10,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Wish List
            </Text>
          ),
        }}
        component={WishList}
      />
      <Tabs.Screen
        name="User"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assests/icons/user.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#2DC268' : '#CDCDD2',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#CDCDD2',
                fontSize: 10,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              About
            </Text>
          ),
        }}
        component={User}
      />
    </Tabs.Navigator>
  );
};

export default Tab;
