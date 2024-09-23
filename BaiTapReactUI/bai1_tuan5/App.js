import { TextInput, Image, Button, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  const vs_mart = [
  {
    id: 1,
    name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng (màu đen)',
    price: 1790000,
    color:'black',
    img: require('./img/vs_black.png'), 
    rate: 312
  },
  {
    id: 2,
    name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng (màu xanh)',
    price: 2000000,
    color:'#234896',
    img: require('./img/vs_blue.png'),
    rate: 6543
  },
  {
    id: 3,
    name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng (màu đỏ)',
    price: 1800000,
    color:'red',
    img: require('./img/vs_red.png'),
    rate: 145
  },
  {
    id: 4,
    name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng (màu bạc)',
    price: 1500000,
    color:'#C5F1FB',
    img: require('./img/vs_silver.png'),
    rate: 523
  },
];



function HomeScreen({ navigation, route }) {
  const product = route.params?.currentProduct ?? vs_mart[0];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {product ? (
        <View style={styles.card}>
            <View style={styles.info}>
              <Image source={product.img} style={styles.img} />
              <Text style={{textAlign:'center'}} >{product.name}</Text>
            </View>
            <View style={styles.rates}>
              <Image style={styles.imgRates} source={require('./img/star.png')} />
              <Image style={styles.imgRates} source={require('./img/star.png')} />
              <Image style={styles.imgRates} source={require('./img/star.png')} />
              <Image style={styles.imgRates} source={require('./img/star.png')} />
              <Image style={styles.imgRates} source={require('./img/star.png')} />
            </View>
            <Text style={{marginTop:10,marginBottom:10}} >(Xem {product.rate} đánh giá)</Text>
            <View style={styles.price}>
              <Text style={{
                marginRight:40,
                color:'red',
                fontWeight:'bold',
                fontSize:17,
              }} >{product.price.toLocaleString()} VNĐ</Text>
              <Text style={{
                fontSize:12,
                textDecorationLine:'line-through'}} >{product.price.toLocaleString()} VNĐ</Text>
            </View>
        </View>
        
        
      ) : (
        <Text>Không có sản phẩm nào.</Text>
      )}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ProductDetail', { product: product })}>
          <Text style={styles.textBtn} > Chon Mau </Text> 
          <Image style={styles.imgBtn} source={require('./img/Vector.png')} > </Image> 
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor:'red',
            marginTop:10,
            borderRadius:5,
            padding:10}}>
          <Text style={{
            color:'white',
            textAlign:'center'
          }} > Mua </Text> 
        </TouchableOpacity>
    </View>
  );
}

function ProductDetail({ navigation, route }) {
  // const product = route.params?.product;
  const [color,setColor] = useState('');
  const [currentProduct, setCurrentProduct] = useState(vs_mart[0]); 
  const products = vs_mart;

  useEffect(() => {
    const selectedProduct = products.find(item => item.color === color);

    if (selectedProduct) {
      setCurrentProduct(selectedProduct);
    }
  }, [color]);

  return (
    <View style={{ 
      padding: 20,
      }}>
      <View style={{ 
        flexDirection:'row',
        marginBottom:20,
        gap:15
      }}>
        <Image source={currentProduct.img} style={{
          width:120,
          height:150
        }} />
        <View style={{flex:1}}>
          <Text style={{ fontSize: 14 }}>{currentProduct.name}</Text>
          <Text style={{ fontSize: 18,fontWeight:'bold',color:'red',marginTop:50 }}>{currentProduct.price.toLocaleString()} VNĐ</Text>
        </View>
      </View>
      <View style={{
        width:'100%',
        height: 250
      }}>
        {products ? (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {products.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={{
                  backgroundColor: item.color , 
                  borderRadius: 5,
                  width: 50,
                  height: 30,
                }}
                onPress={() => {
                  setColor(item.color);
                }}
                
              />
            ))}
          </View>
        ) : (
        <Text>Không có sản phẩm nào.</Text>
      )}
      </View>
      <Button
        title="Xác nhận"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: { currentProduct },
            merge: true,
          });
        }}
      />
    </View>
    
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetail}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 250,
    marginBottom: 10,
  },
  info:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  card: {
    padding: 10,
    marginBottom: 20,
  },
  rates:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:10,
  },
  imgRates:{
    width:20,
    height:20
  },
  price:{
    flexDirection:'row',
    alignItems:'center'
  },
  btn:{
    borderColor:'#ddd',
    borderRadius:5,
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:6
  },
  textBtn:{
    textAlign:'center',
  },
  imgBtn:{
    width:10,
    height:11,
    marginLeft:20
  }
});
