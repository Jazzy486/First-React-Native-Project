import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert} from 'react-native';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';




export default function Home() {

  const navigation = useNavigation();  
  const handlePress = () => {
    navigation.navigate('Dashboard');
  };

  const handleDarkModeToggle = () => {
    Alert.alert('Well Done!', 'You have successfully toggled dark mode!');
  }

  
  


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginBottom:20}}>Welcome to Home Screen</Text>
      <Pressable style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Go to Dashboard</Text>
      </Pressable>

      <Pressable style={{...styles.button, marginTop:20}}>
      <Text style={styles.text} onPress={handleDarkModeToggle}>Toggle Dark Mode</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      paddingHorizontal: 52,
      borderRadius: 50,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });