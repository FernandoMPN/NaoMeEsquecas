import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

import Styles from './Styles'

function Home({ navigation }) {
  return(
    <View style={ Styles.mainView }>
        <View style={ Styles.topBar }/>
        <View style={ Styles.image }/>
        <View style={ Styles.button }>
            <Text style={ Styles.buttonText }>Quero Ser Atendido</Text>
        </View>
        <TouchableOpacity style={ Styles.button } onPress={() => navigation.navigate('LoginPsico')} activeOpacity={0.8}>
                <Text style={ Styles.buttonText }>Quero Atender</Text>
        </TouchableOpacity>
        <Text style={ Styles.aboutText }>Sobre o app</Text>
        <View style={ Styles.shapes }/>
    </View>
  ) 
}
export default Home
