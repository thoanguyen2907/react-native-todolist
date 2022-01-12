
import {StyleSheet } from 'react-native'
import color from './../../contains/color'

const styles = StyleSheet.create({
      item: {
        flexDirection: 'row',
        backgroundColor: color.white ,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      square: {
        width: 48, 
        height: 36,
        borderRadius: 10,
        backgroundColor:  color.second ,
        alignItems: 'center',
        justifyContent: 'center'
      
      },
      number: {
        color: '#fff'
      },
      text: {
        width: '80%'
      }
})

export default styles