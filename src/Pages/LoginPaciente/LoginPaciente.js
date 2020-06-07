import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        TextInput} from 'react-native'

import Styles, {TextStyle} from './Styles'
import colors from '../../Utils/colors'

function LoginPaciente({ navigation }){

    const [usercode, setUsercode] = useState('')

    const retrivePatientCode = () => {
        navigation.navigate('LoginPacienteResend')
    }

    return(
        <SafeAreaView style={[Styles.MainContainer]}>
            <View style={ Styles.MainContainer }>

                <View>
                    <Text style={ TextStyle.header }>Seja bem-vindo novamente!</Text>
                    <Text style={ TextStyle.info }>Que bom ter você de volta!</Text>
                    <Text>
                        <Text style={ TextStyle.info }>Já que você já agendou alguma consulta com a gente antes,</Text>
                        <Text style={ TextStyle.infoBold }> você deve ter recebido um código de paciente no seu e-mail.</Text>
                    </Text>
                    
                </View>

                <View style={ Styles.ButtonsArea }>
                    
                    <Text style={ TextStyle.info }>Por favor, veja qual é o seu código e o digite abaixo.</Text>

                    <TextInput
                        style={ Styles.textInput }
                        placeholder='Código do paciente'
                        onChangeText={(text) => setUsercode(text)}
                        value={usercode}/>

                    <TouchableOpacity onPress={retrivePatientCode} activeOpacity={0.8}>
                        <Text>Não recebi um código</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ Styles.button }>
                        <Text style={ TextStyle.buttonTextSemiBold }>Entrar</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </SafeAreaView>
    )

}

export default LoginPaciente