import React, { useState } from 'react'
import {Text,
    View,
    TextInput,
    TouchableOpacity} from 'react-native'

import Styles from './Styles'

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
            setTest('botao clicado')
        }else{
            setTest('preencha os campos corretamente')
        }
    }

    return(
        <View style={Styles.mainView}>
            <View style={Styles.topBar}></View>
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
    )
}
export default LoginPsico