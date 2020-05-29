import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, Modal, ScrollView } from 'react-native'

import Styles from './Styles'
import { About } from '../Configuracao/Configuracao'

const logo = require('../../Assets/Images/logoHome/logo-home.png')
const formas = require('../../Assets/Images/formas.png')

function Home({ navigation }) {
    
    const [visible, setVisibility] = useState(false)
    
    return(
        <View style={ Styles.mainView }>
            <Modal visible={visible} transparent={true} animationType='fade'>
                <View style={ Styles.about }>
                    <View style={{ width: '100%', height: '80%' }}>
                        <About/>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setVisibility(false)} style={ Styles.backButton }>
                        <Text style={ Styles.backButtonText }>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Image source={ logo } style={ Styles.image } />
            <TouchableOpacity style={ Styles.button } onPress={() => navigation.navigate('LoginPacienteLanding')} activeOpacity={0.8}>
                <Text style={ Styles.buttonText }>Quero Ser Atendido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ Styles.button } onPress={() => navigation.navigate('LoginPsico')} activeOpacity={0.8}>
                <Text style={ Styles.buttonText }>Quero Atender</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setVisibility(true)}>
                <Text style={ Styles.aboutText }>Sobre o app</Text>
            </TouchableOpacity>
            <Image source={ formas } style={ Styles.shapes } />
        </View>
    ) 
}
export default Home
