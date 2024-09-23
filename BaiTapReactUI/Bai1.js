import react from 'react'
import {TouchableOpacity,Button,Image,View,Text} from 'react-native'

export default function App() {
  return (
    <View style={{
      width:340,
      height:1200,
      backgroundColor:'#00CCF9',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:50}}>

      <View style={{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <View style={{
        width: 100,            
        height: 100,           
        borderRadius: 50,      
        borderWidth: 10,        
        borderColor: 'black',
        justifyContent:'center',
        alignItems:'center'
        }}>
        </View>
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
        }}>GROW YOUR BUSINESS</Text>
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
        }}>We will help you to grow your business using online server</Text>
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
        width: 100,
        padding: 10,
        borderRadius: 10,
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
      <TouchableOpacity style={{
        width: 100,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#E3C000',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: 'bold',
        }}>SIGN UP</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

