import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../../../Color'
import ImageComponent from '../../../components/Atom/ImageComponent'

interface ImageText{
  name:string,
  image:string
}

const ImageText = (props:ImageText) => {
  return (
    <View>
      {/* <View style={{borderWidth:1,borderColor:color.iconColor, height:30, width:30 , borderRadius:15,alignSelf:'flex-end',position:'absolute' }}></View> */}
      <Image source={require('../../Categories/image/Flag-India.webp')} style={{position:'absolute',height:30, width:30 , borderRadius:15,alignSelf:'flex-end',zIndex:2}}/>
      <View style={{position:'relative'}}>
      <Image source={require('../../Categories/image/2.jpg')} style={{ height:80, width:80, borderRadius:40 ,position:'relative'}} resizeMode='cover'/>
        <Text style={{ textAlign:'center'}}>{props.name}</Text>
      </View>
      </View>
  )
}

export default ImageText

const styles = StyleSheet.create({})