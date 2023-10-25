import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './components/LoginScreen';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ChatScreen from './components/ChatScreen';
import AuthHandler from './components/AuthHandler';
import LoadingScreen from './components/LoadingScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';







export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <AuthHandler>
    {(loginFlag) => (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={loginFlag ? 'Home' : 'Welcome'}>
        <Stack.Screen 
        name="Welcome" 
        component={LoginScreen} 
        options={{ headerShown: false }}  
        />

        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: true }}  
        />

        <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ headerShown: true }}  
        />

       <Stack.Screen 
        name="ChatScreen" 
        component={ChatScreen} 
        options={{ headerShown: true }}  
        />

        
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
          )}
    </AuthHandler>
  );
}


