import { SafeAreaView,TextInput, Image, Button, View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'; 
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useSelector,useDispatch } from 'react-redux';
import { fetchTasks , delTask} from '../Redux_Toolkit/taskSlice'

const user = {
  name:'Bao',
  email:'baon6777@gmail.com',
  desc:'Very handsome',
  img: require('../userIcon.png'),
}

export default function Home({ navigation}) {
  const tasks = useSelector(state => state.tasks);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const deleteTask = (id) => {
    dispatch(delTask(id)); 
  };
  const filteredTasks = tasks.filter(task =>
    task.title && task.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Ionicons 
        name={item.completed ? 'checkbox' : 'square-outline'} 
        size={24} 
      />
      <Text style={styles.taskText}>{item ? item.title : 'Loading...'}</Text>
      <TouchableOpacity style={styles.editIcon}
        onPress={() => navigation.navigate('Edit',{ id : item.id})}  
      >
        <Ionicons name="pencil" size={24} color="red" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editIcon}
        onPress={() => deleteTask(item.id)}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

   return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{
          width:20,
          height:20,
        }} 
        onPress={() => navigation.navigate('Login')}>
          <Image style={{
            width:20,
            height:20,
          }} source={require('../arrowToRight.png')} />
        </TouchableOpacity>
        <View style={{
          flexDirection:'row'
        }}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} 
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>{user.name}</Text>
            <Text style={styles.subGreeting}>{user.desc}</Text>
          </View> 
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.taskList}
        ListEmptyComponent={<Text>No tasks available</Text>}
      />
      <TouchableOpacity style={styles.addButton}
        onPress={()=> navigation.navigate('Add')}>
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',    
    marginBottom: 20,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 12,
    color: '#888',
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#B0B0B0',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  taskList: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  taskText: {
    flex: 1,
    fontSize: 13,
    color: '#888',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  editIcon: {
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#00bfa5',
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});
