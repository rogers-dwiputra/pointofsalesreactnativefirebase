/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screens/LoginScreen';
import RegistrasiScreen from './src/screens/RegistrasiScreen';
import OrdersTab from './src/screens/OrdersTab';
import TransactionsTab from './src/screens/TransactionsTab';
import SettingsTab from './src/screens/SettingsTab';
import OrderSummaryScreen from './src/screens/OrderSummaryScreen';
import OrderFinishScreen from './src/screens/OrderFinishScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Registrasi" component={RegistrasiScreen} />
        <Stack.Screen 
        name="MainTab" 
        component={MainTab} 
        options={{ headerShown: false }}
        />
        <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />
        <Stack.Screen name="OrderFinish" component={OrderFinishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Orders" 
      component={OrdersTab} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart-outline" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen 
      name="Transactions" 
      component={TransactionsTab} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list-outline" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen 
      name="Settings" 
      component={SettingsTab} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cog-outline" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default App;
