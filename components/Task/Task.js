import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import styles from './style'

const Task = (props) => {
    return (
        <TouchableOpacity 
        onPress = {props.onDeleteTask}
        >
        <View style = {styles.item}>
        <View style = {styles.square}>
         <Text style = {styles.number}>{props.number}</Text>
        </View>
         
          <Text style = {styles.text}>{props.title}</Text>          
      </View>
    
        </TouchableOpacity>
    )
}

export default Task

