import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation ,} from '@react-navigation/native';
import Categories from './screens/Categories';
import HomeScreen from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconComponent from './components/Atom/IconComponent';
import iconConstant from './iconConstant';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
              tabBarLabelStyle:{color:'black'},
              tabBarIcon: ({ color, size }) => (
                <IconComponent iconName={iconConstant.hamBurger} color={'black'} size={20} />
              )
            }}></Tab.Screen>
            <Tab.Screen name="Categories" component={Categories} options={{
              tabBarLabelStyle:{color:'black'},
               tabBarIcon: ({ color, size }) => (
                <IconComponent iconName={iconConstant.filterIcon} color={'black'} size={25} />
              )
            }}/>
        </Tab.Navigator>
  )
}

export default AppStack