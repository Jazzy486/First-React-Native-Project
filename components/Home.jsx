import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';




export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [buttonStyle, setButtonStyle] = useState(styles.button);
  const [textStyle, setTextStyle] = useState(styles.text);

  const navigation = useNavigation();  
  const handlePress = () => {
    navigation.navigate('Dashboard');
  };

   // Function to set the initial dark mode state
  const initializeDarkMode = async () => {
    try {
      // Get the list of users from AsyncStorage
      const usersData = await AsyncStorage.getItem('users');
      if (usersData) {
        const users = JSON.parse(usersData);

        // Find the user with isLoggedIn set to true
        const loggedInUser = users.find(user => user.isLoggedIn === true);

        if (loggedInUser) {
          // Set the darkMode state based on the user's darkMode property
          setDarkMode(loggedInUser.darkMode);

          // Update styles based on darkMode
          if (loggedInUser.darkMode) {
            setContainerStyle({
              ...styles.container,
              backgroundColor: '#252525',
            });
            setButtonStyle({
              ...styles.button,
              backgroundColor: 'white',
            });
            setTextStyle({
              ...styles.text,
              color: 'black',
            });
          }
        }
      }
    } catch (error) {
      console.error('Error initializing dark mode:', error);
    }
  };

  useEffect(() => {
    initializeDarkMode();
  }, []);

  const handleDarkModeToggle = async () => {
    // Toggle dark mode in AsyncStorage
    try {
      // Get the list of users from AsyncStorage
      const usersData = await AsyncStorage.getItem('users');
      if (usersData) {
        const users = JSON.parse(usersData);

        // Find the user with isLoggedIn set to true
        const loggedInUser = users.find(user => user.isLoggedIn === true);

        if (loggedInUser) {
          // Toggle the darkMode property for the logged-in user
          loggedInUser.darkMode = !loggedInUser.darkMode;

          // Save the updated user data back to AsyncStorage
          await AsyncStorage.setItem('users', JSON.stringify(users));

          // Toggle the darkMode state
          setDarkMode(loggedInUser.darkMode);

          // Update styles based on darkMode
          if (loggedInUser.darkMode) {
            setContainerStyle({
              ...styles.container,
              backgroundColor: '#252525',
            });
            setButtonStyle({
              ...styles.button,
              backgroundColor: 'white',
            });
            setTextStyle({
              ...styles.text,
              color: 'black',
            });
          } else {
            // Reset styles to default
            setContainerStyle(styles.container);
            setButtonStyle(styles.button);
            setTextStyle(styles.text);
          }

          Alert.alert(
            'Dark Mode Toggled',
            `Dark Mode is now ${loggedInUser.darkMode ? 'enabled' : 'disabled'}.`
          );
        } else {
          Alert.alert('No logged-in user found.');
        }
      }
    } catch (error) {
      console.error('Error during dark mode toggle:', error);
    }
  };


  const handleLogOut = async () => {
    try {
      // Get the list of users from AsyncStorage
      const usersData = await AsyncStorage.getItem('users');
      if (usersData) {
        const users = JSON.parse(usersData);

        // Find the user with isLoggedIn set to true
        const loggedInUserIndex = users.findIndex(user => user.isLoggedIn === true);

        if (loggedInUserIndex !== -1) {
          // Set isLoggedIn to false for the logged-in user
          users[loggedInUserIndex].isLoggedIn = false;

          // Save the updated user data back to AsyncStorage
          await AsyncStorage.setItem('users', JSON.stringify(users));
          Alert.alert('Logout', 'You have been logged out.');
          // Navigate to the login screen or any other appropriate screen
          navigation.navigate('Welcome'); // Replace 'Login' with the appropriate screen name
        } else {
          Alert.alert('Logout', 'No logged-in user found.');
        }
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleDelete = async () => {
    try {
      // Clear all data from AsyncStorage
      await AsyncStorage.clear();

      Alert.alert('Data Cleared', 'All data has been cleared.');
      // Navigate to the login screen or any other appropriate screen
      navigation.navigate('Welcome'); // Replace 'Welcome' with the appropriate screen name
    } catch (error) {
      console.error('Error during data clearing:', error);
    }
  };

  
  


  return (
    <View style={containerStyle}>
    <Text style={{ ...textStyle, marginBottom: 20 }}>Welcome to Home Screen</Text>
    <Pressable style={{ ...buttonStyle }} onPress={handlePress}>
      <Text style={textStyle}>Go to Dashboard</Text>
    </Pressable>
    <Pressable style={{ ...buttonStyle, marginTop: 20 }} onPress={handleDarkModeToggle}>
      <Text style={textStyle}>Toggle Dark Mode</Text>
    </Pressable>
    <Pressable style={{ ...buttonStyle, marginTop: 20 }} onPress={handleLogOut}>
      <Text style={textStyle}>Log Out</Text>
    </Pressable>
    <Pressable style={{ ...buttonStyle, marginTop: 20 }} onPress={handleDelete}>
      <Text style={textStyle}>Clear Data</Text>
    </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'white'
    },
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