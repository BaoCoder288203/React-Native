import React , {useState,useEffect}from 'react';
import {StyleSheet,Del,TextInput,TouchableOpacity,Button,Image,View,Text} from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

export default function App() {
  const priceDefault = 141.800;
  const [soluong,setSoluong] = useState(1);

  const thanhtien = soluong*priceDefault;

  const increate = () =>{
    setSoluong(soluong + 1);
  }
  const decreate = ()=>{
    if(soluong > 0){
      setSoluong(soluong - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Image 
            source={require('./book.png')} 
            style={styles.img}
          />
          <View 
            style={styles.subHeader}
          > 
            <Text
              style={styles.text1}
            >
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text
              style={styles.text2}
            >
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={styles.text3}
            >
              {priceDefault.toFixed(3)} đ 
            </Text>
            <Text
              style={styles.text4}
            >
              {priceDefault.toFixed(3)} đ 
            </Text>
            <View style={styles.quantity}>
              <View style={styles.btnQuantity}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}
                  onPress={decreate}>-</Text>
                </TouchableOpacity>
                <Text
                  style={styles.textQuantity}
                >{soluong}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}
                        onPress={increate}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.buttonBuyAgain}>
                  <Text style={styles.textBuyAgain}>Buy Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={styles.main}
        >
          <Text style={styles.mainText1}>Mã giảm giá đã lưu</Text>
          <Text style={styles.mainText2}>Xem tại đây</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.codeContainer}>
            <View style={styles.icon}></View>
            <Text style={styles.text}>Mã giảm giá</Text>
          </View>
          
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.headerBottom}>
          <Text 
            style={styles.headerBottomText1}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text style={styles.headerBottomText2}>
          Nhập tại đây?
          </Text>
        </View>
        <View style={styles.headerBottom}>
          <Text 
            style={styles.headerBottomText3}>
          Tạm tính
          </Text>
          <Text style={styles.headerBottomText4}>
            {thanhtien.toFixed(3)} đ 
          </Text>
        </View>
        <View style={styles.footerBottom}>
          <View style={styles.totalContainer}>
            <Text style={styles.labelText}>Thành tiền</Text>
            <Text style={styles.totalText}>{thanhtien.toFixed(3)} đ</Text>
          </View>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.buttonOrder}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'space-between', 
    backgroundColor: '#c4c4c4',
  },
  img: {
    width: 104,
    height: 127
  },
  top:{
    width:'100%',
    height:'45%',
    backgroundColor:'#fff',
  },
  header:{
    backgroundColor:'#fff',
    flexDirection:'row',
    margin: 8,
  },
  subHeader:{
    marginHorizontal:15,
    width:'100%',
    flex:1,
    justifyContent:'space-around'
  },
  text1:{
    fontSize: 12,
    fontWeight:'bold',
  },
  text2:{
    fontSize: 12,
    fontWeight:'bold'
  },
  text3:{
    color:'red',
    fontSize: 18,
    fontWeight:'bold',
  },
  text4:{
    color:'#808080',
    fontSize: 11,
    fontWeight:'bold',
    textDecorationLine:'line-through',
  },
  quantity:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  btnQuantity: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  button: {
    width: 13,
    height: 13,  
    backgroundColor: '#B0B0B0',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  buttonText: {
    width:'100%',
    height:6,
    textAlign:'center',
    color: '#000',
    bottom: 13,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textQuantity:{
    fontWeight:'bold',
    marginHorizontal:10,
  },
  buttonBuyAgain:{
  },
  textBuyAgain:{
    fontWeight: 'bold',
    fontSize:12,
    color:'#134fec',
  },
  main:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    margin: 8,
  },
  mainText1:{
    fontSize:11,
    fontWeight:'bold',
  },
  mainText2:{
    fontSize:12,
    fontWeight:'bold',
    marginLeft:17,
    color:'#134fec',
  },
  
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    margin: 8,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#909090',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:40,
    borderRadius: 5,
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 20,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  applyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottom:{
    width:'100%',
    height:'100%'
  },
  headerBottom:{
    width:'100%',
    height:50,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:15,
    padding: 15
  },  
  headerBottomText1:{
    fontSize:11,
    fontWeight:700,
  },
  headerBottomText2:{
    fontSize:11,
    fontWeight:700,
    color:'#134fec',
  },
  headerBottomText3:{
    fontSize:17,
    fontWeight:700,
  },
  headerBottomText4:{
    fontSize:20,
    fontWeight:700,
    color:'red',
  },
 footerBottom: {
    marginTop:50,
    padding: 20,
    backgroundColor: 'white',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    color: 'gray',
  },
  totalText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonOrder: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
