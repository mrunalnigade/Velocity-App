import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainScreen from './src/MainScreen'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <NavigationContainer>
     <NativeBaseProvider>
     <View style={{flex:1}}>
        <MainScreen/>
      </View>
     </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App
