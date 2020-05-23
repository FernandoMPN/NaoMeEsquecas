import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        StatusBar,
        TouchableOpacity} from 'react-native'

import Styles, {TextStyle} from './Styles'

function LoginPacienteLanding({ navigation }){

    const register = () => {
        navigation.navigate('RegisterPaciente')
    }

    const login = () => {
        navigation.navigate('LoginPaciente')
    }

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <StatusBar backgroundColor='#743293'/>

                <View>
                    <Text style={ TextStyle.header }>Olá!</Text>
                    <Text style={ TextStyle.info }>Antes de continuarmos, precisamos saber de uma coisa:</Text>
                    <Text style={ [TextStyle.infoBold, TextStyle.textMargin] }>Você já agendou alguma consulta com a gente pelo app?</Text>
                </View>

                <View style={ Styles.ButtonsArea }>
                    
                    <TouchableOpacity style={ Styles.largeButton } onPress={register} activeOpacity={0.8}>               
                        <Text style={ TextStyle.buttonTextBold }>Não,</Text>
                        <Text style={ TextStyle.buttonText }> essa é minha primeira vez</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ Styles.largeButton } onPress={login} activeOpacity={0.8}>
                        <Text style={ TextStyle.buttonTextBold }>Sim,</Text>
                        <Text style={ TextStyle.buttonText }> já agendei antes</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </SafeAreaView>
    )

}

export default LoginPacienteLanding