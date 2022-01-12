import React, { useState } from 'react'
import { View, Text , Keyboard, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native'

import styles from './style'

export default function Form(props) {
    const [task, setTask] = useState('')

    const handleAddTask = () => {
        
        if(task.length === 0) {
            alert("Please add a task !!!");
            return
        } 
       props.onAddTask(task)
        setTask('')
        Keyboard.dismiss()
    }
    
    return (
        <KeyboardAvoidingView
        behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
         style = {styles.addTask}>
            <TextInput 
            value = {task}
            style = {styles.input} 
            placeholder='Add a task'
            onChangeText={(text) => setTask(text)}
            />
            <TouchableOpacity onPress = {handleAddTask}>
            <View style = {styles.iconWrapper}>
                <Text style = {styles.icon}>+</Text>
            </View>
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
    )
}
