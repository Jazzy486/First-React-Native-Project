import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert} from 'react-native';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';




export default function Dashboard() {
  const navigation = useNavigation();  
  const handlePress = () => {
    Alert.alert('Well Done!', 'You have successfully logged in!');
  };
  
  


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome to Dashboard</Text>
      <Pressable style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Go to Dashboard</Text>
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