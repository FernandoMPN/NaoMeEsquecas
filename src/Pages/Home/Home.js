import React from 'react'
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'

import Styles from './Styles'

const logo = require('../../Assets/Images/logoHome/logo-home.png')
const formas = require('../../Assets/Images/formas.png')

function Home({ navigation }) {
  return(
    <>
        <StatusBar backgroundColor='#6B398E'/>
        <View style={ Styles.mainView }>
            <Image source={ logo } style={ Styles.image } />
            <TouchableOpacity style={ Styles.button } onPress={() => navigation.navigate('LoginPacienteLanding')} activeOpacity={0.8}>
                <Text style={ Styles.buttonText }>Quero Ser Atendido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ Styles.button } onPress={() => navigation.navigate('LoginPsico')} activeOpacity={0.8}>
                <Text style={ Styles.buttonText }>Quero Atender</Text>
            </TouchableOpacity>
            <Text style={ Styles.aboutText }>Sobre o app</Text>
            <Image source={ formas } style={ Styles.shapes } />
        </View>
    </>
  ) 
}
export default Home
