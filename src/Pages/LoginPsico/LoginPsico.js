import React, { useState } from 'react'
import {Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert} from 'react-native'

import Styles from './Styles'
import colors from '../../Utils/colors'

import Requests from '../../Utils/Requests'

import { useDispatch } from 'react-redux'
import { loginAction } from '../../Store/Ducks/auth'
import Loading from '../../Components/Loading/Loading'
import LocalStore from '../../Store/LocalStore'


function LoginPsico({navigation}){

    const [email, setEmail]=useState('')
    const [codAcesso,setCodAcesso]=useState('')

    const [isLoading, setLoadingStatus] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = async () => {

        if(email!==''&&codAcesso!==''){

            setLoadingStatus(true)
            
            Requests.loginDePsicologo(email,codAcesso)
                .then(response => {
            
                    setLoadingStatus(false)
                    dispatch(loginAction(response.data.token, 'Psicologo', response.data.name, response.data.id))

                    LocalStore.storeUserEmail(email)
                    LocalStore.storeUserID(codAcesso)
                    LocalStore.storeUserType('Psicologo')
                    
                    navigation.navigate('MainPage')

                })
                .catch(error => {

                    console.log(error)
                    setLoadingStatus(false)

                    if(error.response.data.status)
                        Alert.alert(error.response.data.status)
                    else
                        Alert.alert('Algo deu errado', 'Por favor, tente novamente. Caso o erro persista, entre em contato com o suporte.')

                })

        } else{
            Alert.alert('Algo deu errado.','Preencha todos os campos.')
        }

    }

    return(
        <>
        <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
            <View style={Styles.mainView}>
                <Text style={Styles.Title}>Entrar como profissional da saúde</Text>

                <TextInput 
                    style={Styles.LoginInput}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    placeholder={'Email'}
                    placeholderTextColor="#AAA"/>
                <TextInput
                    style={Styles.LoginInput}
                    autoCapitalize="none"
                    maxLength={6}
                    value={codAcesso} 
                    onChangeText={text=>setCodAcesso(text)}
                    placeholder={'Código de acesso'}
                    placeholderTextColor="#AAA"/>
                
                <TouchableOpacity onPress={()=>handleSubmit()} style={Styles.LoginButton}>
                    <Text style={Styles.textButton}>Entrar</Text>
                </TouchableOpacity>


                <Text>Ainda não possui um cadastro com a gente?</Text>

                <TouchableOpacity onPress={() => navigation.navigate('CadastroPsico')}>
                    <Text style={Styles.cadastro}>Cadastre-se agora</Text>
                </TouchableOpacity>

                <Text style={{marginTop: 20}}>Esqueceu seu código de acesso?</Text>
                
                <TouchableOpacity onPress={() => navigation.navigate('LoginPsicoResend')}>
                    <Text style={Styles.cadastro}>Toque aqui</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
        {isLoading? <Loading/>:null}
        </>
    )
}
export default LoginPsico