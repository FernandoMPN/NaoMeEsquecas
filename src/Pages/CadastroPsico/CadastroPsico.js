import React, { useState,useEffect } from 'react'
import { Text, 
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    SafeAreaView,
    StatusBar,
    BackHandler } from 'react-native'
import {termoDeAdesao,diretrizes} from '../../Utils/texts'
import Styles,{TextStyle} from '../RegisterPaciente/Styles'
import StyleProprio from './Styles'
import PsicoFreeTime from './PsicoFreeTime'
import {getTextDate} from '../RegisterPaciente/RegisterPaciente'


const InformacoesPessoal=({name,setName,email,setEmail,codPsico,setCodPsico,next})=>{
    const handleNext=()=>{
        if(name!=='' && email!=='' && codPsico !=='')
            next()
    }

    return(
        <SafeAreaView>
            <View style={Styles.MainContainer}>
                <StatusBar backgroundColor='#743293'/>
                <Text style={TextStyle.header}>Seja bem-vindo!</Text>
                <Text style={ TextStyle.info }>Precisamos saber de algumas informações pessoais.</Text>
                
                <View style={Styles.ButtonsArea}>

                    <TextInput 
                        style={ Styles.textInput } 
                        placeholder={'Nome completo'} 
                        value={name} 
                        onChangeText={text=>setName(text)}/>
                    
                    <TextInput 
                        style={ Styles.textInput }
                        placeholder={'email'} 
                        value={email} 
                        onChangeText={text=>setEmail(text)}/>
                    
                    <TextInput 
                        style={ Styles.textInput }
                        placeholder={'número de CFP'} 
                        value={codPsico} 
                        onChangeText={text=>setCodPsico(text)}/>
                    
                    <TouchableOpacity style={Styles.largeButton} onPress={()=>handleNext()}>
                        <Text style={TextStyle.buttonTextSemiBold}>Proximo</Text>
                    </TouchableOpacity>

                </View>
            
            </View>
        
        </SafeAreaView>
    ) 
}

const TermoPage=({nomeDoPsicologo,next})=>{
    const [check,setCheck]=useState(false)
    const handleNext=()=>{
        if(check)
            next()
    }
    return(
        <View style={Styles.MainContainer}>
            <Text style={TextStyle.header}>Termo de compromisso</Text>
            <Text style={TextStyle.info}>A seguir, temos nosso <Text style={TextStyle.infoBold}>termo de voluntariado</Text>. Leia-o com atenção.</Text>
            <ScrollView style={StyleProprio.styleScrollView}>
                <Text>{termoDeAdesao}</Text>
            </ScrollView>
            <View style={StyleProprio.checkButtonView}>
                <TouchableOpacity style={[StyleProprio.checkButton,check?StyleProprio.checkedButton:'']} onPress={()=>setCheck(!check)}></TouchableOpacity>
                <Text>Estou ciente de todos os termos de compromisso.</Text>
            </View>
            <TouchableOpacity style={[Styles.largeButton,{alignSelf:'center'}]} onPress={()=>handleNext()}>
                <Text style={TextStyle.buttonTextSemiBold}>Proximo</Text>
            </TouchableOpacity>
            
        </View>

    )
}

const DiretrizesPages=({nomeDoPsicologo,next})=>{
    const [check,setCheck]=useState(false)
    const handleNext=()=>{
        if(check)
            next()
    }
    return(
        
        <View style={Styles.MainContainer}>
            <Text style={TextStyle.header}>Termo de compromisso</Text>
            <Text style={ TextStyle.info }>Olá, {nomeDoPsicologo}!Essas são as diretrizes do projeto Não Me Esqueças.</Text>
            <Text style={ TextStyle.infoBold }>Precisamos que você as leia com atenção.</Text>
            <ScrollView style={StyleProprio.styleScrollView}>
                <Text>{diretrizes}</Text>
            </ScrollView>
            <View style={StyleProprio.checkButtonView}>
                <TouchableOpacity style={[StyleProprio.checkButton,check?StyleProprio.checkedButton:'']} onPress={()=>setCheck(!check)}></TouchableOpacity>
                <Text>Estou ciente de todos as diretrizes do projeto.</Text>
            </View>
            <TouchableOpacity style={[Styles.largeButton,{alignSelf:'center'}]} onPress={()=>handleNext()}>
                <Text style={TextStyle.buttonTextSemiBold}>Proximo</Text>
            </TouchableOpacity>
        </View>
    )
}

const ComfirmacaoPage=({name,email,crp,horarios,next})=>{
    return(
        <View style={Styles.MainContainer}>
            <Text style={TextStyle.header}>Seja bem-vindo</Text>
            <Text style={TextStyle.info}>Já estamos quase acabando! Agora, só precisamos que você <Text style={TextStyle.infoBold}>confirme seus dados</Text> abaixo.</Text>
            <View style={StyleProprio.confirmView}>
                <Text style={TextStyle.infoTitle}>Nome:</Text>
                <Text style={TextStyle.infoContent}>{name}</Text>
                <Text style={TextStyle.infoTitle}>Email:</Text>
                <Text style={TextStyle.infoContent}>{email}</Text>
                <Text style={TextStyle.infoTitle}>CRP:</Text>
                <Text style={TextStyle.infoContent}>{crp}</Text>
                <Text style={TextStyle.infoTitle}>Horários diponíveis:</Text>
                <View style={{height: 58}}>
                    <ScrollView>
                        {horarios.map(item => <Text key={item.day + '#' + item.time} style={ TextStyle.infoContent }>{getTextDate(item.day, item.time)}</Text>)}
                    </ScrollView>
                </View>
            </View>
            <TouchableOpacity style={[Styles.largeButton,{alignSelf:'center'}]} onPress={()=>next()}>
                <Text style={TextStyle.buttonTextSemiBold}>Proximo</Text>
            </TouchableOpacity>
        </View>
    )
}

const FimDoCadastro=({name,next})=>{
    return(
        <View style={Styles.MainContainer}>
            <Text style={TextStyle.header}>{name}, obrigado se dispor a ajudar aos outros!</Text>
            <Text style={[TextStyle.info,]}>
                Seu perfil será analisado e, assim que for aprovado, você receberá um email confirmando seu cadastro em nosso projeto!
            </Text>
            <View style={StyleProprio.buttonView}>
                <TouchableOpacity style={[Styles.largeButton,StyleProprio.encerrarButton]} onPress={()=>next()}>
                    <Text style={TextStyle.buttonTextSemiBold}>Encerrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function CadastroPsico({navigation}) {

    const ESTADO={
        DADOSPESSOAIS:1,
        HORARIOS:2,
        TERMODEADESAO:3,
        DIRETRIZES:4,
        CONFIRMACAO:5,
        ENCERRAR:6
    }

    const [cadastroStatus,setCadastroStatus]=useState(ESTADO.DADOSPESSOAIS)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [codPsico,setCodPsico]=useState('')
    const [psicoFreeTime,setPsicoFreeTime]=useState([])
    const backHandle=()=>{
        switch(cadastroStatus){
            case ESTADO.DADOSPESSOAIS:
                navigation.goBack()
                break
            case ESTADO.HORARIOS:
                setCadastroStatus(ESTADO.DADOSPESSOAIS)
                break
            case ESTADO.TERMODEADESAO:
                setCadastroStatus(ESTADO.HORARIOS)
                break
            case ESTADO.DIRETRIZES:
                setCadastroStatus(ESTADO.TERMODEADESAO)
                break
            case ESTADO.CONFIRMACAO:
                setCadastroStatus(ESTADO.DIRETRIZES)
                break
            case ESTADO.ENCERRAR:    
                setCadastroStatus(ESTADO.CONFIRMACAO)
                break
            default:
                throw new Error('Undefined stage at Register screen (switchView)')
        }
        return true
    }
    useEffect(() => {

        BackHandler.addEventListener("hardwareBackPress", backHandle)

        return function cleanup(){
            BackHandler.removeEventListener("hardwareBackPress", backHandle)
        }

    },[cadastroStatus])

    const handleName=(text)=>{
        setName(text)
    }

    const handleEmail=(text)=>{
        setEmail(text)
    }

    const handleCodPsico=(text)=>{
        setCodPsico(text)
    }

    const changePage=()=>{
        switch(cadastroStatus){
            case ESTADO.DADOSPESSOAIS:
                setCadastroStatus(ESTADO.HORARIOS)
                break
            case ESTADO.HORARIOS:
                setCadastroStatus(ESTADO.TERMODEADESAO)
                break
            case ESTADO.TERMODEADESAO:
                setCadastroStatus(ESTADO.DIRETRIZES)
                break
            case ESTADO.DIRETRIZES:
                setCadastroStatus(ESTADO.CONFIRMACAO)
                break
            case ESTADO.CONFIRMACAO:
                setCadastroStatus(ESTADO.ENCERRAR)
                break
            case ESTADO.ENCERRAR:    
                navigation.navigate('Home')
                break
        }
    }

    const pages=()=>{
        switch(cadastroStatus){
            case ESTADO.DADOSPESSOAIS:
                return <InformacoesPessoal name={name} setName={handleName} email={email} setEmail={handleEmail} codPsico={codPsico} setCodPsico={handleCodPsico} next={changePage}/>
            case ESTADO.HORARIOS:
                return <PsicoFreeTime psicoFreetimeCallback={setPsicoFreeTime} next={changePage}/>
            case ESTADO.TERMODEADESAO:
                return <TermoPage nomeDoPsicologo={name} next={changePage}/>
            case ESTADO.DIRETRIZES:
                return <DiretrizesPages nomeDoPsicologo={name} next={changePage}/>
            case ESTADO.CONFIRMACAO:
                return <ComfirmacaoPage name={name} email={email} crp={codPsico} horarios={psicoFreeTime} next={changePage}/>
            case ESTADO.ENCERRAR:
                return <FimDoCadastro name={name} next={changePage}/>
            default:
                return 
        }
   }
    return(
        pages()
    )
}
export default CadastroPsico