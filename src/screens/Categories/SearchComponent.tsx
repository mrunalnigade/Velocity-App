import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import IconComponent from '../../components/Atom/IconComponent'
import iconConstant from '../../iconConstant'
import { Input , Icon} from 'native-base'
import { color } from '../../Color'
import data from '../../data.json'


const SearchComponent = () => {
    const [data , setData] = useState('');
    const onChangeText = (text:string) =>{
        setData(text);
    }
    if(data.length > 2){
        setTimeout(() => {
            console.log('the data is',data)
        }, 100);
    }
  return (
    <View style={{marginVertical:16}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', width:'85%', justifyContent:'space-between', borderWidth:1, borderColor:color.iconColor, borderRadius:8, paddingHorizontal:10 , backgroundColor:color.greyWhiteColor}}>
            <IconComponent iconName={iconConstant.searchIcon} size={25} containerStyle={{flex:1, justifyContent:'center'}} />
                <View style={{
                    width:'80%' , borderColor:color.iconColor , 
                }}>
                    <Input onChangeText={(text)=>onChangeText(text)} value={data}  placeholder='Search the text' size={25} background={null} borderWidth={0}/>
                </View>
            <IconComponent iconName={iconConstant.mike} size={30} containerStyle={{flex:1, justifyContent:'center', alignItems:'center'}}/>
        </View>
        <TouchableOpacity style={{width:60}}>
        <IconComponent iconName={iconConstant.filterIcon} size={30} containerStyle={{borderWidth:1, flex:1, alignItems:'center', justifyContent:'center',borderColor:color.iconColor, borderRadius:8, marginLeft:10 , backgroundColor:color.greyWhiteColor}} />
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({})