import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        StatusBar,
        TouchableOpacity,
        TextInput} from 'react-native'

import Styles, {TextStyle} from './Styles'

function LoginPacienteResend({navigation}){

    const [email, setEmail] = useState('')

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>
              
                <Text style={ TextStyle.header }>Seja bem-vindo novamente!</Text>

                <Text style={ TextStyle.info }>Não tem mais seu código de  paciente? Não se preocupe!</Text>
                <Text style={ [TextStyle.infoBold, TextStyle.textMargin] }>Digite seu e-mail abaixo que iremos enviar ele agora.</Text>

                <View style={ Styles.ButtonsArea }>

                    <TextInput
                        style={ Styles.textInput }
                        placeholder='E-mail'
                        onChangeText={(email) => setEmail(text)}
                        value={email}/>


                    <TouchableOpacity style={ Styles.button }>
                        <Text style={ TextStyle.buttonTextSemiBold }>Enviar</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </SafeAreaView>
    )

}

export default LoginPacienteResend