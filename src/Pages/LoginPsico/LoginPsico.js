import React, { useState } from 'react'
import {Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView} from 'react-native'

import Styles from './Styles'
import colors from '../../Utils/colors'
import Request from '../../Utils/Requests'

function LoginPsico({navigation}){

    const [numPsico, setNumPsico]=useState('')
    const [codAcesso,setCodAcesso]=useState('')
    const [test,setTest]=useState('')
    const handleNumPsico=(value)=>{
        setNumPsico(value)
    }

    const handleCodAcesso=(value)=>{
        setCodAcesso(value)
    }

    const handleSubmit=()=>{
        if(numPsico!==''&&codAcesso!==''){
            const request= new Request()
            request.loginDePsicologo(numPsico,codAcesso)
        }else{
            setTest('preencha os campos corretamente')
        }
    }

    return(
        <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
            <View style={Styles.mainView}>
                <Text style={Styles.Title}>Entrar como profissional da saúde</Text>
                <TextInput style={Styles.LoginInput} value={numPsico} onChangeText={text=>handleNumPsico(text)} placeholder={'Número do CRP'}/>
                <TextInput style={Styles.LoginInput} value={codAcesso} onChangeText={text=>handleCodAcesso(text)} placeholder={'Código de acesso'}/>
                <TouchableOpacity onPress={()=>handleSubmit()} style={Styles.LoginButton}>
                    <Text style={Styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                    <Text>Ainda não possui um cadastro com a gente?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CadastroPsico')}>
                    <Text style={Styles.cadastro}>Cadastre-se agora</Text>
                </TouchableOpacity>
                <Text>{test}</Text>
            </View>
        </SafeAreaView>
    )
}
export default LoginPsico