import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, Modal, SafeAreaView, Alert} from 'react-native'

import Styles from './Styles'
import { About } from '../Configuracao/Configuracao'
import colors from '../../Utils/colors'
import LocalStore from '../../Store/LocalStore'
import Requests from '../../Utils/Requests'
import Loading from '../../Components/Loading/Loading'

import { useDispatch } from 'react-redux'
import { loginAction } from '../../Store/Ducks/auth'

const logo = require('../../Assets/Images/logoHome/logo-home.png')
const formas = require('../../Assets/Images/formas.png')

function Home({ navigation }) {    

    const [visible, setVisibility] = useState(false)
    const [isLoading, setLoadingStatus] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {

        const verifyLogStatus = async () => {

            let userType = await LocalStore.getUserType()

            if(userType === null || userType === "null")
                return

            setLoadingStatus(true)
            let userID = await LocalStore.getUserID()
            let userEmail = await LocalStore.getUserEmail()

            userType = userType.replace(/"/g, "")
            userID = userID.replace(/"/g, "")
            userEmail = userEmail.replace(/"/g, "")

            if(userType === 'Psicologo'){

                Requests.loginDePsicologo(userEmail, userID)
                .then(response => {
            
                    setLoadingStatus(false)
                    dispatch(loginAction(response.data.token, 'Psicologo', response.data.name, response.data.id))
                    
                    navigation.navigate('MainPage')

                })
                .catch(error => {

                    console.log(error)
                    setLoadingStatus(false)

                    if(error.response.data.status)
                        Alert.alert(error.response.data.status)
                    else
                        Alert.alert('Algo deu errado', 'Não foi possível fazer seu login automático. Por favor, faça manualmente.')

                })

            }

            if(userType === 'Paciente'){

                Requests.loginDePaciente(userEmail, userID)
                .then(response => {
                    setLoadingStatus(false)
                    dispatch(loginAction(response.data.token, 'Paciente', response.data.name, response.data.id))
                    
                    navigation.navigate('MainPage')
                })
                .catch(error => {

                    setLoadingStatus(false)

                    if(error.response.data.status !== undefined)
                        Alert.alert(error.response.data.status)
                    else
                        Alert.alert('Algo deu errado', 'Não foi possível fazer seu login automático. Por favor, faça manualmente.')

                })

            }

        }

        verifyLogStatus()

    }, [])
    
    return(
        <>
        <SafeAreaView style={[ Styles.mainView, {backgroundColor: colors.statusBar} ]}>
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
        </SafeAreaView>
        {isLoading? <Loading/>:null}
        </>
    ) 
}
export default Home
