import React, { useState } from 'react'
import { Text, 
    View,
    TouchableOpacity,
    ScrollView,
    TextInput } from 'react-native'
import {termoDeAdesao,diretrizes} from '../../Utils/texts'
import Styles from '../CadastroPsico/Styles'


const informacoesPesoal=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [codPsico,setCodPsico]=useState('')

    const handleName=(text)=>{
        setName(text)
    }

    const handleEmail=(text)=>{
        setEmail(text)
    }

    const handleCodPsico=(text)=>{
        setCodPsico(text)
    }

    return(
        <View>
            <Text>Insira seus dados para que o cadastro seja efetuado</Text>
            <TextInput placeholder={'nome'} value={name} onChangeText={text=>handleName(text)}/>
            <TextInput placeholder={'email'} value={email} onChangeText={text=>handleEmail(text)}/>
            <TextInput placeholder={'número de CFP'} value={codPsico} onChangeText={text=>handleCodPsico(text)}/>
            <TouchableOpacity>
                <Text>Proximo</Text>
            </TouchableOpacity>
        </View>
    ) 
}

const termoPage=()=>{
    return(
        <View>
            <ScrollView>
                {termoDeAdesao}
            </ScrollView>
            <TouchableOpacity>
                <Text>Proximo</Text>
            </TouchableOpacity>
        </View>
    )
}

const diretrizesPages=()=>{
    return(
        <View>
            <ScrollView>
                {diretrizes}
            </ScrollView>
            <TouchableOpacity>
                <Text>Proximo</Text>
            </TouchableOpacity>
        </View>
    )
}

const horarios=()=>{
    return(
        <View>
            <Text>Agora, precisamos saber quais são os horários que você tem disponível</Text>
            <TouchableOpacity>
                <Text>Adicionar novo horário</Text>
                <View><Text>+</Text></View>
                </TouchableOpacity>
            <TouchableOpacity>
                <Text>Proximo</Text>
            </TouchableOpacity>
        </View>
    )
}

function CadastroPsico({navigation}) {

    const ESTADO={
        DADOSPESSOAIS:1,
        HORARIOS:2,
        TERMODEADESAO:3,
        DIRETRIZES:4,
        CONFIRMACAO:5
    }

    const [cadastroStatus,setCadastroStatus]=useState()
    
    const pages=()=>{
        switch(cadastroStatus){
            case ESTADO.DADOSPESSOAIS:
                return
            case ESTADO.HORARIOS:
                return
            case ESTADO.TERMODEADESAO:
                return
            case ESTADO.DIRETRIZES:
                return
            default:
                return 
        }
   }
    return(
        {pages()}
    )
}
export default CadastroPsico