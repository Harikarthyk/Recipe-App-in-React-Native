//Import Dependencies.
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Custom Components/Screens/Assests.
import Recipe from './Screens/Recipe';
import User from './Screens/User';
import WishList from './Screens/WishList';
import Tab from './navigation/Tab';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Tab} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="WishList" component={WishList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
