import { SafeAreaView, TextInput, Image, Button, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'; 
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../Redux_Toolkit/taskSlice';

const user = {
  name: 'Bao',
  email: 'baon6777@gmail.com',
  desc: 'Very handsome',
  img: require('../userIcon.png'),
};

export default function Edit({ navigation, route }) {
  const id = route.params?.id; 
  const tasks = useSelector(state=>state.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState(null); 
  const [newTask, setNewTask] = useState('');

  const handleUpdate = ()=>{
    const taskNew = {
      title: newTask,
      id: task.id,
    }
    dispatch(editTask(taskNew));
    setNewTask('');
    navigation.navigate('Home');
  }

  useEffect(() => {
    if (tasks) { 
      const foundTask = tasks.find(task => task.id === id);
      if (foundTask) {
        setTask(foundTask);
      }
    } else {
      return <Text>Loading task data...</Text>;
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image style={styles.backIcon} source={require('../arrowToRight.png')} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
          <View>
            <Text style={styles.greeting}>{user.name}</Text>
            <Text style={styles.subGreeting}>{user.desc}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>EDIT YOUR JOB</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>Job: {task ? task.title : 'Loading...'}</Text>
        <Text>Job After: </Text>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Input your job"
            value={newTask}
            onChangeText={setNewTask}
          />
        </View>
      </View>
      <View style={styles.finishButtonContainer}>
        <TouchableOpacity style={styles.finishButton} onPress={handleUpdate}>
          <Text style={styles.finishButtonText}>FINISH</Text>
          <Image style={styles.finishIcon} source={require('../arrowToLeft.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.footerImageContainer}>
        <Image style={styles.footerImage} source={require('../Image 95.png')} />
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
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    width: 20,
    height: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerContent: {
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
  title: {
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
  finishButtonContainer: {
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
  finishButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  finishIcon: {
    width: 15,
    height: 15,
  },
  footerImageContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  footerImage: {
    width: 150,
    height: 150,
  },
});
