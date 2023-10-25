import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert, FlatList, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import faviconImage from '../assets/favicon.png';

import { useNavigation } from '@react-navigation/native';

var myArrayForFlatList = [
  { img: faviconImage, name: 'Khalid', msg: 'New York City', time: '10:00 AM', id: '0' },
  { img: faviconImage, name: 'Ali', msg: 'New York City', time: '10:00 AM', id: '1' },
  { img: faviconImage, name: 'Asad', msg: 'New York City', time: '10:00 AM', id: '2' },
  { img: faviconImage, name: 'Khalid', msg: 'New York City', time: '10:00 AM', id: '3' },
  { img: faviconImage, name: 'Khalid', msg: 'New York City', time: '10:00 AM', id: '4' },
  { img: faviconImage, name: 'Khalid', msg: 'New York City', time: '10:00 AM', id: '5' },
  { img: faviconImage, name: 'Khalid', msg: 'New York City', time: '10:00 AM', id: '6' },
  { img: faviconImage, name: 'Khalid', msg: 'New York City', time: '10:00 AM', id: '7' },
  { img: faviconImage, name: 'Khalid', msg: 'New York City', time: '10:00 AM', id: '8' },
  { img: faviconImage, name: 'Khalid', msg: 'New York City', time: '10:00 AM', id: '9' }
]




export default function Dashboard() {
  const navigation = useNavigation();  
  const handlePress = () => {
    Alert.alert('Well Done!', 'You have successfully logged in!');
  };

  const Chat = (item) => {
    navigation.navigate('ChatScreen', { name: item.name,
      img: item.img,
      msg: item.msg,
      time: item.time, });
  };
  
     //useEffect calls itself, useful for auto updates from APIs
//   useEffect(() => {
//     Alert.alert('Well Done!', myArrayForFlatList[0].name);
// }, []);
 
  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Welcome to Dashboard</Text>
    //   <Pressable style={styles.button} onPress={handlePress}>
    //   <Text style={styles.text}>Go to Dashboard</Text>
    //   </Pressable>
    // </View>
    <View>
      
      
      <View style={{backgroundColor:'white', paddingTop: 20, paddingBottom: 40}}>
    <Text style={{ fontSize: 20, marginTop: 10, textAlign:'center', color: 'green', fontWeight:600 }}>ChatSter</Text>
    <View style={{display:'flex', flexDirection: 'row', justifyContent:'space-evenly', marginTop:30}}>
      
      <Text>Chats</Text>
      <Text>Groups</Text>
      <Text>Contacts</Text>
    </View>
      
    
  </View> 
      <FlatList
        data={myArrayForFlatList}
        renderItem={({item}) => (
          
        <TouchableOpacity style={{flex:1,flexDirection:'row', backgroundColor:'lightgrey', height:80, marginBottom:20}} onPress={() => Chat(item)}>
            <View style={{flex:0.30, backgroundColor:'lightgrey', justifyContent:'center', alignItems:'center'}}>

        <Image
          style={{width:60, height:60, borderRadius: 150 / 2,
          overflow: "hidden",
          borderWidth: 3,
          borderColor: "red"}}
          source={item.img}
      />

            </View>
            
            <View style={{flex:0.70, backgroundColor:'blue'}}>            
            <View style={{flex:0.50, backgroundColor:'lightgrey'}}>
              <Text style={{fontSize:20}}> {item.name}</Text>
              <Text style={{fontSize:8, marginLeft:4}}> {item.msg}</Text>

            </View>
            <View style={{flex:0.50, backgroundColor:'lightgrey'}}>
            
            <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
            <Text> {item.msg} </Text>
            <Text> {item.time} </Text>
            </View>
            
            
            </View>

            </View>
          </TouchableOpacity>
        ) }
        keyExtractor={item => item.id}
      />
      
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