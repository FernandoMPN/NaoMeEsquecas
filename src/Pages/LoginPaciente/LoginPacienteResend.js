import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        TextInput,
        Alert} from 'react-native'

import Styles, {TextStyle} from './Styles'
import colors from '../../Utils/colors'
import Requests from '../../Utils/Requests'
import Loading from '../../Components/Loading/Loading'

function LoginPacienteResend({navigation}){

    const [email, setEmail] = useState('')

    const [isLoading, setLoadingStatus] = useState(false)

    const resendEmail = () => {

        if(email.length === 0){
            Alert.alert('Insira o e-mail')
            return
        }

        if(!email.includes('@')){
            Alert.alert('Insira um e-mail válido')
            return
        }

        setLoadingStatus(true)

        Requests.reenviarCodigo(email, 'Paciente')
            .then(response => {

                setLoadingStatus(false)

                Alert.alert('O email foi enviado com sucesso!', 'Em alguns instantes, verifique sua caixa de entrada ou spam para ver seu código de paciente.', [
                    {
                        title: 'Ok',
                        onPress: () => navigation.navigate('LoginPaciente')
                    }
                ])


            })
            .catch(error => {

                setLoadingStatus(false)

                if(error.response.data.status)
                    Alert.alert(error.response.data.status)
                else
                    Alert.alert('Algo deu errado', 'Por favor, tente enviar novamente. Caso o erro persista, entre em contato com o suporte.')

            })


    }

    return(
        <>
        <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
            <View style={ Styles.MainContainer }>
              
                <Text style={ TextStyle.header }>Seja bem-vindo novamente!</Text>

                <Text style={ TextStyle.info }>Não tem mais seu código de paciente? Não se preocupe!</Text>
                <Text style={ [TextStyle.infoBold, TextStyle.textMargin] }>Digite seu e-mail abaixo que iremos reenviar ele agora.</Text>

                <View style={ Styles.ButtonsArea }>

                    <TextInput
                        style={ Styles.textInput }
                        placeholder='E-mail'
                        onChangeText={(text) => setEmail(text)}
                        value={email}/>

                    <TouchableOpacity style={ Styles.button } onPress={resendEmail}>
                        <Text style={ TextStyle.buttonTextSemiBold }>Enviar</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </SafeAreaView>
        {isLoading? <Loading/>:null}
        </>
    )

}

export default LoginPacienteResend