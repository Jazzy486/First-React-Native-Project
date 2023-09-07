import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert } from 'react-native';


const handlePress = () => {
  Alert.alert('Well Done!', 'You have successfully logged in!');
};


export default function App() {
  

  return (
    
    <View style={{flex: 1}}>
      <View style={{flex: 0.30, backgroundColor:'#fffaf0', alignItems:'center', justifyContent:'center'}}>
      <Image
        style={{width: 100, height: 100}}
        source={require('./assets/favicon.png')}
      />
      </View>

      <View style={{flex:0.40, backgroundColor:'#fffaf0', alignItems:'center', justifyContent:'center'}}>
      <TextInput
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        style={{padding: 10, width: 280, height: 60, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', marginTop: 20, borderRadius: 50,color: 'black'}}
        placeholder="Email"
        
      />

      <TextInput
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        style={{padding: 10, width: 280, height: 60, borderColor: 'gray', borderWidth: 1, borderRadius: 50, backgroundColor: 'white', marginTop: 20}}
        placeholder="Password"


      />



      </View>

      <View style={{flex:0.30, backgroundColor:'#fffaf0', alignItems:'center', justifyContent:'center'}}>
      <Pressable style={styles.button} onPress={handlePress}>
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
