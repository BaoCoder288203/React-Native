import React from 'react'
import {TouchableOpacity,TextInput,Button,Image,View,Text} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']} style={{
      width:'100%',
      height:'100%',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:50}}>
    
      <View style={{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text style={{
          fontSize:50,
          fontWeight: 'bold'
        }}>CODE</Text>
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
          textAlign: 'center'
        }}>VERIFICATION</Text>
      </View>

      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 20
      }}>
        <Text style={{
          color: '#000',
          fontSize: 12,
          fontWeight: 'bold',
          textAlign:'center'
        }}>Enter ontime password sent on ++849092605798</Text>
      </View>

      <View style={{
        width:'100%',
        marginBottom: 20,
        flexDirection:'row',
        justifyContent:'center'
      }}>
        <TextInput
          style={{
            width: '15%',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor:'#fff',
            padding: 5,
          }}
        />
        <TextInput
          style={{
            width: '15%',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor:'#fff',
            padding: 5
          }}
        />
        <TextInput
          style={{
            width: '15%',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor:'#fff',
            padding: 5
          }}
        />
        <TextInput
          style={{
            width: '15%',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor:'#fff',
            padding: 5
          }}
        />
        <TextInput
          style={{
            width: '15%',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor:'#fff',
            padding: 5
          }}
        />
        <TextInput
          style={{
            width: '15%',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor:'#fff',
            padding: 5
          }}
        />
        
    </View>

      <View style={{
        flex:1,
        width:340,
        height:100,
        justifyContent:'center',
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
          }}>NEXT</Text>
        </TouchableOpacity>
      </View>
      
    </LinearGradient>
  );
}

