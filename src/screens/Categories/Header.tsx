import { StyleSheet, Text, View , FlatList, Image} from 'react-native'
import React from 'react'
import ImageComponent from '../../components/Atom/ImageComponent'
import TextComponent from '../../components/Atom/TextComponent'
import { color } from '../../Color'

const Header = () => {
    const data = [
        {
            image:'',
            text:'Astrologer'
        },
        {
            image:'',
            text:'Asistant'
        },
        {
            image:'',
            text:'Makeup'
        },
        {
            image:'',
            text:'Mehandi'
        },
        {
            image:'',
            text:'Photographer'
        }
    ]
  return (
    <View style={{marginVertical:6}}>
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={data} renderItem={({item,index})=>{
        return(
            <View style={styles.containerStyle}>
                {/* <ImageComponent imageSource={''} style={{}} containerStyle={{}} /> */}
                <Image source={require('../Categories/image/2.jpg')} style={{ height:80, width:80, borderRadius:40}} resizeMode='cover'/>
                {/* <TextComponent text={''} containerStyle={{borderWidth:2, height:80 , borderRadius:50}}/> */}
                <TextComponent text={item.text} style={{fontSize:10}} containerStyle={{flex:1, justifyContent:'flex-end', alignItems:'center'}}/>

            </View>
        )
      }}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerStyle:{height:100, width:83,marginLeft:4}
})