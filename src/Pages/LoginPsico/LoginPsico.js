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

function LoginPsico({navigation}){

    const [email, setEmail]=useState('')
    const [codAcesso,setCodAcesso]=useState('')
    
    const handleEmailPsico=(value)=>{
        setEmail(value)
    }

    const handleCodAcesso=(value)=>{
        setCodAcesso(value)
    }

    const handleSubmit= async ()=>{
        if(email!==''&&codAcesso!==''){
            const request= new Requests()
            request.loginDePsicologo(email,codAcesso)
            .then((response)=>{
                Alert.alert('response',response)
            })
            .catch(error=>{Alert.alert('response',error)})
            //Alert.alert('response',response)
            // if(response!==erro)
            //     navigation.navigate('MainPage')
            // else
            //     Alert.alert('Algo deu errado.','Verifique se seu código e email estão corretos.')
        }else{
            Alert.alert('Algo deu errado.','Preencha todos os campos.')
        }
    }

    return(
        <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
            <View style={Styles.mainView}>
                <Text style={Styles.Title}>Entrar como profissional da saúde</Text>
                <TextInput  style={Styles.LoginInput} value={email} onChangeText={text=>handleEmailPsico(text)} placeholder={'Email'}/>
                <TextInput secureTextEntry={true} style={Styles.LoginInput} value={codAcesso} onChangeText={text=>handleCodAcesso(text)} placeholder={'Código de acesso'}/>
                <TouchableOpacity onPress={()=>handleSubmit()} style={Styles.LoginButton}>
                    <Text style={Styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                    <Text>Ainda não possui um cadastro com a gente?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CadastroPsico')}>
                    <Text style={Styles.cadastro}>Cadastre-se agora</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default LoginPsico