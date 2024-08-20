import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TextComponent from '../../components/Atom/TextComponent';
import { color } from '../../Color';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onClickButton = () =>{
    navigation.navigate('Categories');
  }
  return (
    <View style={styles.container}>
      <TextComponent text='Welcome to the Home Screen' style={styles.textStyle}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  touchableStyle:{
    height:50,
    width:'auto',
    borderWidth:1,
    borderColor: color.iconColor
  },
  container:{
    paddingHorizontal:16,
    alignItems:'center',
    flex:1,
    justifyContent:'center',
    backgroundColor:'white'
  },
  textStyle:{
    fontFamily:'Roboto',
    fontSize:18,
    fontWeight:'700',

  }
})