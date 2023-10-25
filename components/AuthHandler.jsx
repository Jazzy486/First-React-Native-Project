// AuthHandler.js
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AuthHandler({ children }) {
  const [loginFlag, setLoginFlag] = useState(false);

  useEffect(() => {
    // Check if any users exist in local storage
    AsyncStorage.getItem('users')
      .then((data) => {
        const existingUsers = data ? JSON.parse(data) : [];

        // Check if any user has isLoggedIn set to true
        const isLoggedInUser = existingUsers.find((user) => user.isLoggedIn === true);

        // If an isLoggedIn user is found, set loginFlag to true
        if (isLoggedInUser) {
          console.log("flag set to true");
          setLoginFlag(true);
        }
      })
      .catch((error) => {
        console.error('Error reading users from AsyncStorage:', error);
      });
  }, []);

  return children(loginFlag);
}

export default AuthHandler;
