import { TextInput, TouchableOpacity, Button, Image, FlatList, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const Item = ({ name, rate, price, discount, img }) => (
  <View style={styles.itemContainer}>
    <View style={styles.item}>
      <Image source={{ uri: img }} style={styles.image} />
      <Text>{name}</Text>
      <View style={styles.ratingContainer}>
        <View style={styles.starsContainer}>
          <Image style={styles.star} source={require('Star 4.png')} />
          <Image style={styles.star} source={require('Star 4.png')} />
          <Image style={styles.star} source={require('Star 4.png')} />
          <Image style={styles.star} source={require('Star 4.png')} />
          <Image style={styles.star} source={require('Star 4.png')} />
        </View>
        <Text>({rate})</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text>{price} đ</Text>
        <Text>-{discount} %</Text>
      </View>
    </View>
  </View>
);

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://66fa5570afc569e13a9b4744.mockapi.io/api/lab6/items/v1/items')
      .then(response => response.json())
      .then(data => {
        setItems(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Item
        name={item.name}
        discount={item.discount}
        rate={item.rate}
        price={parseFloat(item.price).toFixed(3)}
        img={item.img}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={25} color="white" />
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Input your item..." />
          <FontAwesome style={styles.searchIcon} name="search" size={25} color="black" />
        </View>
        <FontAwesome style={styles.cartIcon} name="shopping-cart" size={25} color="white" />
        <View style={styles.cartBadge}></View>
        <FontAwesome style={styles.menuIcon} name="bars" size={25} color="white" />
      </View>
      <View style={styles.body}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2} // Chia thành 2 cột
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
    backgroundColor: '#ecf0f1',
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c4c4c4',
  },
  item: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
  star: {
    width: 10,
    height: 10,
    marginRight: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    padding: 8,
  },
  searchContainer: {
    position: 'relative',
    flex: 1,
    marginLeft: 20,
  },
  searchInput: {
    paddingVertical: 8,
    paddingLeft: 40,
    backgroundColor: 'white',
  },
  searchIcon: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
  cartIcon: {
    marginLeft: 15,
  },
  cartBadge: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'red',
    position: 'absolute',
    top: 10,
    left: '84%',
    width: 10,
    height: 10,
  },
  menuIcon: {
    marginLeft: 15,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  chatPrompt: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
});
