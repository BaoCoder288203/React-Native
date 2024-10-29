import { SafeAreaView,TextInput, Image, Button, View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'; 
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import 'react-native-gesture-handler'; 
import { addTask } from '../Redux_Toolkit/taskSlice';

const user = {
  name:'Bao',
  email:'baon6777@gmail.com',
  desc:'Very handsome',
  img: require('../userIcon.png'),
}

export default function Add({ navigation}) {
    const dispatch = useDispatch();
    const tasks = useSelector(state=>state);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
      const task = {
        title: newTask
      }

      dispatch(addTask(task));
      setNewTask('');
      navigation.navigate('Home');
  };
   return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} 
        onPress={() => navigation.goBack()}>
          <Image style={styles.backImage} source={require('../arrowToRight.png')} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
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
      <View>
        <Text style={styles.addJobText}>ADD YOUR JOB</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Input your job"
          value={newTask}
          onChangeText={setNewTask}
        />
      </View>
      </View>
      <View style={styles.buttonContainer}>
     <TouchableOpacity style={styles.finishButton} onPress={handleAddTask}>
          <Text style={styles.finishText}>FINISH</Text>
          <Image style={styles.finishImage} source={require('../arrowToLeft.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.jobImage} source={require('../Image 95.png')} />
      </View>
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
  backButton: {
    width: 20,
    height: 20,
  },
  backImage: {
    width: 20,
    height: 20,
  },
  userInfo: {
    flexDirection: 'row',
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
  addJobText: {
    textAlign: 'center',
    color: '#404040',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    flex: 1,
  },
  textInputWrapper: {
    borderWidth: 1, 
    borderColor: '#B0B0B0', 
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BDD6',
    width: 150,
    padding: 10,
    borderRadius: 9,
  },
  finishText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  finishImage: {
    width: 15,
    height: 15,
  },
  imageContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  jobImage: {
    width: 150,
    height: 150,
  },
});
