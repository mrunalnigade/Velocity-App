import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'
import ImageText from '../atoms/ImageText';
import data from '../../../data.json';

const PersonsInfo = () => {
  return (
    <View>
      <FlatList numColumns={4} data={data} renderItem={({item,index})=>{
        return(
            <View style={{paddingLeft:12, paddingTop:10}}>
                <ImageText name={item.name} image={item.profileImage}/>
            </View>
        )
      }}/>
    </View>
  )
}

export default PersonsInfo

const styles = StyleSheet.create({})