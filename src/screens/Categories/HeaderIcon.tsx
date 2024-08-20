import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconComponent from '../../components/Atom/IconComponent'
import iconConstant from '../../iconConstant'

const HeaderIcon = () => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:16}}>
      <IconComponent iconName={iconConstant.hamBurger} size={25}/>
      <IconComponent iconName={iconConstant.searchIcon} size={25}/>
    </View>
  )
}

export default HeaderIcon

const styles = StyleSheet.create({})