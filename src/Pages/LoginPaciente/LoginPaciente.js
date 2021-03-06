import React, { useState, useEffect } from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        TextInput,
        Alert,
        KeyboardAvoidingView,
        Platform,
        Dimensions} from 'react-native'

import Styles, {TextStyle} from './Styles'
import colors from '../../Utils/colors'
import Loading from '../../Components/Loading/Loading'
import Requests from '../../Utils/Requests'

import { useDispatch } from 'react-redux'
import { loginAction } from '../../Store/Ducks/auth'
import LocalStore from '../../Store/LocalStore'

function LoginPaciente({ navigation }){

    const [email, setEmail] = useState('')
    const [usercode, setUsercode] = useState('')

    const [isLoading, setLoadingStatus] = useState(false)

    const [marginVertical, setScreenMargin] = useState(0)

    const retrivePatientCode = () => {
        navigation.navigate('LoginPacienteResend')
    }

    const dispatch = useDispatch()

    const logUserIn = () => {

        if(email.length === 0){
            Alert.alert('Insira o e-mail')
            return
        }

        if(!email.includes('@')){
            Alert.alert('Insira um e-mail válido')
            return
        }

        if(usercode.length === 0){
            Alert.alert('Insira o código de paciente')
            return
        }

        setLoadingStatus(true)

        Requests.loginDePaciente(email, usercode)
            .then(response => {
                setLoadingStatus(false)
                dispatch(loginAction(response.data.token, 'Paciente', response.data.name, response.data.id))

                LocalStore.storeUserEmail(email)
                LocalStore.storeUserID(usercode)
                LocalStore.storeUserType('Paciente')
                
                navigation.navigate('MainPage')
            })
            .catch(error => {

                setLoadingStatus(false)

                if(error.response.data.status !== undefined)
                    Alert.alert(error.response.data.status)
                else
                    Alert.alert('Algo deu errado', 'Por favor, tente novamente. Caso o erro persista, entre em contato conosco')

            })


    }

    const iOS_avoidKeyboardOverlaping = () => {

        if(Platform.OS !== "ios")
            return

        if(Dimensions.get('window').height <= 670)
            return -100
        else
            return -50

    }


    return(
        <>
            <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
                <View style={[Styles.MainContainer, {marginVertical}]}>

                    <View>
                        <Text style={ TextStyle.header }>Seja bem-vindo novamente!</Text>
                        <Text style={ TextStyle.info }>Que bom ter você de volta!</Text>
                        <Text>
                            <Text style={ TextStyle.info }>Já que você já agendou algum atendimento com a gente antes,</Text>
                            <Text style={ TextStyle.infoBold }> você deve ter recebido um código de paciente no seu e-mail.</Text>
                        </Text>
                        
                    </View>

                    <View style={ Styles.ButtonsArea }>
                        
                        <Text style={ TextStyle.info }>Por favor, veja qual é o seu código e o digite abaixo.</Text>

                            <TextInput
                                style={ Styles.textInput }
                                placeholder='E-mail'
                                onChangeText={(text) => setEmail(text)}
                                autoCapitalize="none"
                                placeholderTextColor="#AAA"
                                value={email}/>

                            <TextInput
                                style={ Styles.textInput }
                                placeholder='Código do paciente'
                                onChangeText={(text) => setUsercode(text)}
                                maxLength={6}
                                autoCapitalize="none"
                                placeholderTextColor="#AAA"
                                onFocus={() => setScreenMargin(iOS_avoidKeyboardOverlaping())}
                                onBlur={() => setScreenMargin(0)}
                                value={usercode}/>

                        <TouchableOpacity onPress={retrivePatientCode} activeOpacity={0.8}>
                            <Text>Não tenho/recebi um código</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ Styles.button } activeOpacity={0.8} onPress={logUserIn}>
                            <Text style={ TextStyle.buttonTextSemiBold }>Entrar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
            {isLoading? <Loading/>:null}
        </>
    )

}

export default LoginPaciente