import React from 'react'
import {TextInput,TouchableOpacity,Button,Image,View,Text} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']} style={{
      width:340,
      height:1200,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:50}}>
    
      <View style={{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Image
          source={require('./assets/Group.png')} 
          style={{
            width: 80,
            height: 100,
          }}
        />
      </View>
      
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text style={{
          color: '#000',
          fontSize: 17,
          fontWeight: 'bold',
        }}>FORGET PASSWORD</Text>
      </View>

      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text style={{
          color: '#000',
          fontSize: 12,
          fontWeight: 'bold',
          textAlign:'center'
        }}>Provide your account’s email for which you want to reset your password</Text>
      </View>

      <View style={{
        
      }}>
        <TextInput
          style={{
            position:'relative',
            width:200,
            backgroundColor:'#fff'
          }}
          placeholder="Email"
        />
      <FontAwesome style={{
        
      }} name="envelope" size={18} color="black" />
    </View>

      <View style={{
        flex:1,
        width:340,
        height:100,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center'
      }}>
        <TouchableOpacity style={{
          width: '70%',
          padding: 10,
          backgroundColor: '#E3C000',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
          }}>LOGIN</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}


