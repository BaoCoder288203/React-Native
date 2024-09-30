import { TouchableOpacity,Button,Image,FlatList,View,Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import { FontAwesome } from '@expo/vector-icons';
import {useEffect,useState} from 'react'

// const items = [
  // {
  //   id: '1',
  //   name: 'Ca nau lau nau mi,...',
  //   shop: 'Devang',
  //   img: require('./img/ca_nau_lau.png')
  // },
  // {
  //   id: '2',
  //   name: '1Kg kho ga.',
  //   shop: 'LTD Food',
  //   img: require('./img/ga_bo_toi.png')
  // },
  // {
  //   id: '3',
  //   name: 'Xe can cau da nang',
  //   shop: 'TheGioiDoChoi',
  //   img: require('./img/xa_can_cau.png')
  // },
  // {
  //   id: '4',
  //   name: 'Do choi dang mo hinh',
  //   shop: 'TheGioiDoChoi',
  //   img: require('./img/do_choi_dang_mo_hinh.png')
  // },
  // {
  //   id: '5',
  //   name: 'Lanh dao don gian',
  //   shop: 'Minh Long Book',
  //   img: require('./img/lanh_dao_gian_don.png')
  // },
  // {
  //   id: '6',
  //   name: 'Hieu long tre con',
  //   shop: 'Minh Long Book',
  //   img: require('./img/hieu_long_con_tre.png'),
  // },
  // {
  //   id: '7',
  //   name: 'Hieu long tre con',
  //   shop: 'Minh Long Book',
  //   img: require('./img/hieu_long_con_tre.png'),
  // },
  // {
  //   id: '8',
  //    name: 'Hieu long tre con',
  //   shop: 'Minh Long Book',
  //   img: require('./img/hieu_long_con_tre.png'),
  // },
  // {
  //   id: '9',
  //    name: 'Hieu long tre con',
  //   shop: 'Minh Long Book',
  //   img: require('./img/hieu_long_con_tre.png'),
  // },
  // {
  //   id: '10',
  //   name: 'Hieu long tre con',
  //   shop: 'Minh Long Book',
  //   img: require('./img/hieu_long_con_tre.png'),
  // },
// ]

const Item = ({name,shop,img}) => (
  <View style={styles.items}>
   <View style={styles.item}>
    <Image source={img} style={styles.image} />
    <View style={{}}>
      <Text style={{}}>{name}</Text>
      <Text style={{}}>{shop}</Text>
    </View>
   </View>
   <TouchableOpacity style={{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:'red'}}>
     <Text style={{color:'white'}}>Chat</Text>
   </TouchableOpacity>
  </View>
);

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('https://66fa5570afc569e13a9b4744.mockapi.io/api/lab6/items/v1/name')
    .then(response => {
        return response.json();
      })
      .then(data => {
        setItems(data);
      })
      .catch(err => {
      });
  },[])

  const renderItem = ({item}) => {
    return (
      <Item
        name = {item.name}
        shop = {item.shop}
        img = {item.img}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <FontAwesome name="arrow-left" size={25} color="white" />
        <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>Chat</Text>
        <FontAwesome name="shopping-cart" size={25} color="white" />
      </View>
      <View style={styles.body}>
        <View style={{
          paddingHorizontal:30,
          paddingVertical:10,
          borderBottomWidth:1,
          borderBottomColor:'#c4c4c4',
        }}>
          <Text>
            Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
          </Text>
        </View>  
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <FontAwesome name="bars" size={25} color="black" />
        <FontAwesome name="home" size={25} color="black" />
        <FontAwesome name="refresh" size={25} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  items:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#c4c4c4',
    paddingRight:10,
    marginVertical:3,
  },
  item:{
    flexDirection:'row',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  header:{
    width:'100%',
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    background: '#1BA9FF',
    padding:8,
  },
  body:{
    flex: 13,
  },
  footer:{
    flex: 1,
    flexDirection:'row',
    background: '#1BA9FF',
    justifyContent:'space-between',
    alignItems:'center',
    padding:8,
  },
});
