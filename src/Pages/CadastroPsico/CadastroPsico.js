import React, { useState,useEffect } from 'react'
import { Text, 
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    SafeAreaView,
    Alert,
    BackHandler } from 'react-native'
import {termoDeAdesao,diretrizes} from '../../Utils/texts'
import Styles,{TextStyle} from '../RegisterPaciente/Styles'
import StyleProprio from './Styles'
import PsicoFreeTime from './PsicoFreeTime'
import {getTextDate} from '../RegisterPaciente/RegisterPaciente'
import Loading from '../../Components/Loading/Loading'
import colors from '../../Utils/colors'
import Request from '../../Utils/Requests'


const InformacoesPessoal=({name,setName,email,setEmail,codPsico,setCodPsico,next})=>{
    const handleNext=()=>{
        if(name===''){
            Alert.alert('Campo vazio!', 'Por favor, nos diga qual é seu nome.')
            return
        }
            
        if(email===''){
            Alert.alert('Campo vazio!', 'Por favor, nos diga qual é seu email.')
            return
        }
        if(!email.includes('@')){
            Alert.alert('Campo incorreto!', 'Por favor, informe um e-mail válido.')
            return
        }
            
        if(codPsico ===''){
            Alert.alert('Campo vazio!', 'Por favor, nos diga qual é seu CFP.')
            return
        }
           
            next()
    }

    return(
        <SafeAreaView>
            <View style={Styles.MainContainer}>
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

const SelectSexoPage=({name,sexoVariable,setSexo,next})=>{
    const [sexo,changeSexo]=useState(sexoVariable)
   
    const handleNext=()=>{
            if(sexo==0){
                Alert.alert('Campo vazio!', 'Por favor, selecione uma das alternativas.')
                return
            }
            setSexo(sexo)
            next()
                
    }
    return(
        <View style={Styles.MainContainer}>
            <Text style={TextStyle.header}>Seja  bem-vindo</Text>
            <Text style={TextStyle.info}>Agora nos diga{name}, <Text style={TextStyle.infoBold}>seu sexo para podermos agendar as consultas da forma mais confortavel possivel</Text>.</Text>
            <View style={StyleProprio.confirmView}>
                <View style={StyleProprio.checkButtonView}>
                    <TouchableOpacity style={[StyleProprio.checkButton,sexo==1?StyleProprio.checkedButton:'']} onPress={()=>changeSexo(1)}></TouchableOpacity>
                    <Text>Masculino</Text>
                </View>
                <View style={StyleProprio.checkButtonView}>
                    <TouchableOpacity style={[StyleProprio.checkButton,sexo==2?StyleProprio.checkedButton:'']} onPress={()=>changeSexo(2)}></TouchableOpacity>
                    <Text>Feminino </Text>
                </View>
            </View>
            <View style={StyleProprio.buttonView}>
                <TouchableOpacity style={[Styles.largeButton,{alignSelf:'center'}]} onPress={()=>handleNext()}>
                    <Text style={TextStyle.buttonTextSemiBold}>Proximo</Text>
                </TouchableOpacity>
            </View>
        </View>

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

const ComfirmacaoPage=({name,email,crp,horarios,sexo,next})=>{

    
    return(
        <View style={Styles.MainContainer}>
            <Text style={TextStyle.header}>Seja bem-vindo</Text>
            <Text style={TextStyle.info}>Já estamos quase acabando! Agora, só precisamos que você <Text style={TextStyle.infoBold}>confirme seus dados</Text> abaixo.</Text>
            <View style={StyleProprio.confirmView}>
                <Text style={TextStyle.infoTitle}>Nome:</Text>
                <Text style={TextStyle.infoContent}>{name}</Text>
                <Text style={TextStyle.infoTitle}>Email:</Text>
                <Text style={TextStyle.infoContent}>{email}</Text>
                <Text style={TextStyle.infoTitle}>Sexo:</Text>
                <Text style={TextStyle.infoContent}>{sexo===1?'Masculino':'Feminino'}</Text>
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
        SELECTSEXO:2,
        HORARIOS:3,
        TERMODEADESAO:4,
        DIRETRIZES:5,
        CONFIRMACAO:6,
        ENCERRAR:7
    }

    const [cadastroStatus,setCadastroStatus]=useState(ESTADO.DADOSPESSOAIS)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [codPsico,setCodPsico]=useState('')
    const [sexo,setSexo]=useState(0)
    const [psicoFreeTime,setPsicoFreeTime]=useState([])
    const [isLoading, setLoadingVisibilty] = useState(false)
    
    const handleSubmit=()=>{
        setLoadingVisibilty(true)
    
        Request.cadastroDePsicologo(name,email,codPsico,psicoFreeTime,sexo)
            .then(response=>{
                setLoadingVisibilty(false)
                changePage()
            }).catch(error=>{
                setLoadingVisibilty(false)

                if(!error.response.data)
                    Alert.alert('Algo deu errado', 'Por favor, tente enviar novamente. Caso o erro persista, entre em contato conosco.')
                else
                    Alert.alert(error.response.data.status)
                    
            })
    }

    const backHandle=()=>{
        switch(cadastroStatus){
            case ESTADO.DADOSPESSOAIS:
                navigation.goBack()
                break
            case ESTADO.SELECTSEXO:
                setCadastroStatus(ESTADO.DADOSPESSOAIS)
                break
            case ESTADO.HORARIOS:
                setCadastroStatus(ESTADO.SELECTSEXO)
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
                navigation.navigate('Home')
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
                setCadastroStatus(ESTADO.SELECTSEXO)
                break
            case ESTADO.SELECTSEXO:
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
            case ESTADO.SELECTSEXO:
                return <SelectSexoPage name={name} sexoVariable={sexo} setSexo={setSexo} next={changePage}/>
            case ESTADO.HORARIOS:
                return <PsicoFreeTime psicoFreetimeCallback={setPsicoFreeTime} next={changePage}/>
            case ESTADO.TERMODEADESAO:
                return <TermoPage nomeDoPsicologo={name} next={changePage}/>
            case ESTADO.DIRETRIZES:
                return <DiretrizesPages nomeDoPsicologo={name} next={changePage}/>
            case ESTADO.CONFIRMACAO:
                return <ComfirmacaoPage name={name} email={email} sexo={sexo} crp={codPsico} horarios={psicoFreeTime} next={handleSubmit}/>
            case ESTADO.ENCERRAR:
                return <FimDoCadastro name={name} next={changePage}/>
            default:
                return 
        }
   }
    return(
        <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
            {pages()}
            {isLoading?<Loading/>:null}
        </SafeAreaView>
    )
}
export default CadastroPsico