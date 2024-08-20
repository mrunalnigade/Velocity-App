import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextComponent from '../../components/Atom/TextComponent'
import { useNavigation } from '@react-navigation/native'
import { color } from '../../Color'
import Header from './Header'
import HeaderIcon from './HeaderIcon'
import SearchComponent from './SearchComponent'
import PersonsInfo from './molecule/PersonsInfo'

const Categories = () => {
  const navigation = useNavigation();
  const onClickButton = () =>{
    navigation.goBack();
  }
  return (
   <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
     <View style={{paddingHorizontal:16 , paddingVertical:16, backgroundColor:'white', height:'100%'}}>
      <HeaderIcon/>
      <Header/>
      <SearchComponent/>
      <PersonsInfo/>
    </View>
   </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  touchableStyle:{
    height:50,
    width:'auto',
    borderWidth:1,
    borderColor: color.iconColor
  }
})