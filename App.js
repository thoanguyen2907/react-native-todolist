import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView , Alert, TouchableOpacity} from 'react-native';
import Form from './components/Form/Form';
import Task from './components/Task/Task';
import color from './contains/color'

export default function App() {
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    setTaskList([...taskList, task])
  }
  const handleDeleteTask = (index) => {
    Alert.alert(
      "Delete",
      "You wanna delete the item? ",
      [
        { text: "OK", onPress: () => {
          let taskListTemp = [...taskList]
          taskListTemp.splice(index, 1)
          setTaskList(taskListTemp)
        } },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style = {styles.body}>
        <Text style = {styles.header}>To do list</Text>
        <ScrollView style = {styles.items}>
          {taskList.map((item, index) => {
            return    <Task key = {index} title = {item} number = {index + 1} 
            onDeleteTask = {() => {handleDeleteTask(index)}}
            />
          })}
      
        </ScrollView> 
      </View>
      <Form onAddTask = {handleAddTask}></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  color.background ,
  },
    body: {
      flex: 1, 
      paddingVertical: 50, 
      paddingHorizontal: 30
    },
    header: {
      fontSize: 30,
      color: color.primary ,
      fontWeight: '700',
      textAlign: 'center'
    },
    items: {
      marginTop: 25
    },

});
