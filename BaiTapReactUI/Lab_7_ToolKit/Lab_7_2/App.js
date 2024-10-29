import { SafeAreaView,TextInput, Image, Button, View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import 'react-native-gesture-handler'; 
import { Provider } from 'react-redux';
import { store } from './Redux_Toolkit/store';

function Login({ navigation, route }) {
  const product = route.params?.currentProduct;
  const [email,setEmail] = useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1, padding: 20 ,alignItems:'center' }}>
        <Image style={{
          width:200,
          height:200,
        }} source={require('./Image 95.png')} />
      </View>
      <View style={{ flex: 1, padding: 20, alignItems:'center' }}>
        <Text style={{ color: '#8353E2', fontWeight:'bold',fontSize: 18 }}>MANAGE YOUR</Text>
        <Text style={{ color: '#8353E2', fontWeight:'bold',fontSize: 18 }}>TASK</Text>
        <View style={{
          width: '100%',
          borderRadius:9,
          borderWidth:1,
          borderColor:'grey',
          marginVertical:50,
        }}>
          <TextInput style={{
            paddingVertical:6,
            paddingLeft:30
          }} 
            value={email}
            onChangeText={setEmail}
            placeholder='Enter your name' />
          <Image style={{
            position:'absolute',
            top:7,
            left: 7,
            width:20,
            height:20,
          }} source={require('./mailIcon.jpg')} />
        </View>
        <TouchableOpacity style={{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: '#00BDD6',
          padding:10,
          borderRadius:9,
        }} 
        onPress={() => navigation.navigate('Home', { email : email })}>
          <Text style={{
            color:'white',
            fontWeight:'bold',
          }}>GET STARTED</Text>
          <Image style={{
            width:20,
            height:20,
          }} source={require('./arrowToLeft.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown: false }}
          />
        <Stack.Screen 
          name="Edit" 
          component={Edit}
          options={{ headerShown: false }} />
          <Stack.Screen 
          name="Add" 
          component={Add}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

