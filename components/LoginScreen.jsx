import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



export default function LoginScreen() {

  const [text, onChangeText] = useState('');
  const [password, onChangePassword] = useState('');

  const navigation = useNavigation();
  
  const handleSignupPress = () => {
    if (!text.length) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    if (!password.length) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    const user = { email: text, password: password, isLoggedIn: false };

    AsyncStorage.getItem('users')
      .then((data) => {
        const existingUsers = data ? JSON.parse(data) : [];
        
        // Check if the user already exists
        const userExists = existingUsers.some((existingUser) => existingUser.email === user.email);
        if (userExists) {
          Alert.alert('Error', 'User with this email already exists');
          return;
        }

        // Add the new user
        existingUsers.push(user);

        // Store the updated users in AsyncStorage
        AsyncStorage.setItem('users', JSON.stringify(existingUsers))
          .then(() => {
            console.log('User added and saved in AsyncStorage:', existingUsers);
            navigation.push('Home');
            
          })
          .catch((error) => {
            console.error('Error saving user in AsyncStorage:', error);
          });
      })
      .catch((error) => {
        console.error('Error reading users from AsyncStorage:', error);
      });
  
  };

  const handleLoginPress = () => {
    if (!text.length) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    if (!password.length) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }
  
    AsyncStorage.getItem('users').then((data) => {
      const existingUsers = data ? JSON.parse(data) : [];
      const user = existingUsers.find((existingUser) => existingUser.email === text);
      if (!user) {
        Alert.alert('Error', 'User not found');
        return;
      }
      if (user.password !== password) {
        Alert.alert('Error', 'Password is incorrect');
        return;
      }
      
      // Set isLoggedIn to true for the logged-in user
      user.isLoggedIn = true;
  
      // Save the updated user data back to AsyncStorage
      AsyncStorage.setItem('users', JSON.stringify(existingUsers))
        .then(() => {
          console.log('User logged in and saved in AsyncStorage:', existingUsers);
          navigation.push('Home');
        })
        .catch((error) => {
          console.error('Error saving user in AsyncStorage:', error);
        });
    });
  };
  

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.30, backgroundColor:'#3CF072', alignItems:'center', justifyContent:'center'}}>
      <Image
        style={{width: 100, height: 100,}}
        source={require('../assets/Play_Fusion_Logo-removebg.png')}
      />
      </View>

      <View style={{flex:0.40, backgroundColor:'#3CF072', alignItems:'center', justifyContent:'center'}}>
      <TextInput
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        style={{padding: 10, width: 280, height: 60, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', marginTop: 20, borderRadius: 50,color: 'black'}}
        placeholder="Email"
        
      />

      <TextInput
        numberOfLines={4}
        secureTextEntry={true}
        maxLength={40}
        onChangeText={password => onChangePassword(password)}
        style={{padding: 10, width: 280, height: 60, borderColor: 'gray', borderWidth: 1, borderRadius: 50, backgroundColor: 'white', marginTop: 20}}
        placeholder="Password"


      />



      </View>

      <View style={{flex:0.30, backgroundColor:'#3CF072', alignItems:'center', justifyContent:'center',display:'flex', gap:10 ,flexDirection:"row"}}>
      
      <Pressable style={styles.button} onPress={handleSignupPress}>
      <Text style={styles.text}>Signup</Text>
      </Pressable>
      
      <Pressable style={styles.button} onPress={handleLoginPress}>
      <Text style={styles.text}>Login</Text>
      </Pressable>
      
      </View>
    
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