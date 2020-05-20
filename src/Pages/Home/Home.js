import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'

import Styles from './Styles'

function Home() {
  return(
    <View style={ Styles.mainView }>
        <View style={ Styles.topBar }/>
        <View style={ Styles.image }/>
        <View style={ Styles.button }>
            <Text style={ Styles.buttonText }>Quero Ser Atendido</Text>
        </View>
        <View style={ Styles.button }>
            <Text style={ Styles.buttonText }>Quero Atender</Text>
        </View>
        <Text style={ Styles.aboutText }>Sobre o app</Text>
        <View style={ Styles.shapes }/>
    </View>
  ) 
}
export default Home
