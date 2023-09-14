import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
export default function ChatScreen() {

    const navigation = useNavigation();

    const route = useRoute();

    const {name, img, msg, time} = route.params;   

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name} Hello</Text>
      
    </View>
  );
}
