import { SafeAreaView, TextInput, Image, Button, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

export default function Delete({ navigation, route }) {
  const { id, taskList } = route.params; 

  const [task, setTask] = useState(null); 

  useEffect(() => {
    if (taskList) { 
      const foundTask = taskList.find(task => task.id === id);
      if (foundTask) {
        setTask(foundTask);
      }
    } else {
      return <Text>Loading task data...</Text>;
    }
  }, [id, taskList]);

}
