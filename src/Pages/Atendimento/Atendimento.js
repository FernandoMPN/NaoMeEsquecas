import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native'

import Styles, { TextStyles } from './Styles'
import Countdown from '../../Utils/Countdown'
import colors from '../../Utils/colors'

import { useSelector } from 'react-redux'

import axios from 'axios'

const AtendimentoStage = {

    Carregando: 1,
    SemAgendamento: 2,
    ProximoAgendamento: 3,
    LinkDisponivel: 4

}

function Atendimento({ navigation }) {

    const user = useSelector(state => state.loginReducer.user)
    const [currentStage, setStage] = useState(AtendimentoStage.SemAgendamento)


    Countdown.setLabels(
        ' milissegundo| segundo| minuto| hora| dia| semana| mês| ano| década| século| milênio',
        ' milissegundos| segundos| minutos| horas| dias| semanas| meses| anos| décadas| séculos| milênios',
        ' e ',
        ' + ',
        'agora')
    
    const name = user.name
    const month = 5
    const day = 30
    const hour = 19
    const minute = 0

    const date = new Date(2020, month - 1, day, hour, minute)
    const [timeLeft, setTimeLeft] = useState(Countdown(date, null, null, 2))

    // useEffect(() => {
    //     setInterval(
    //         () => setTimeLeft(Countdown(date, null, null, 2)),
    //         1000
    //     )}  ,
    //     [setTimeLeft] )

    useEffect(()=>{
        
    })

    const Loading = () => {

        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color={colors.statusBar}/>
            </View>
        )

    }

    const SemAgendamento = () => {

        return(
            <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
                <View>
                    <View style={ Styles.MainContainer }>
                        <Text style={ TextStyles.name }>Olá {name.split(" ")[0]}!</Text>

                        <View style={{height: "80%", justifyContent: "space-evenly"}}>

                            <View style={ Styles.accesContainer }> 
                                <Text style={ TextStyles.timeLeft }>
                                    Você ainda não possui nenhuma consulta agendada.
                                </Text>
                            </View>


                            <View style={ Styles.accesContainer }> 
                                <Text style={ TextStyles.timeLeft }>
                                Mas não se preocupe!
                                </Text>
                                <Text style={ TextStyles.noAppointmentsSubtitle }>
                                Assim que nossa equipe agendar uma consulta para você, iremos enviar um e-mail avisando ;)
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Remark')} style={ Styles.button }>
                                <Text style={ TextStyles.button }>Deseja remarcar a consulta?</Text>
                            </TouchableOpacity>
                        </View>
                        

                    </View>
                </View>
            </SafeAreaView>
        )

    }

    const LinkDisponivel = () => {

        return(
            <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
                <View>
                    <View style={ Styles.MainContainer }>
                        <Text style={ TextStyles.name }>{`${name},`}</Text>
                        <Text style={ TextStyles.nextConsult }>sua próxima consulta será em</Text>
                        <View style={ Styles.timerContainer }>
                            <Text style={ TextStyles.timeLeft }>{`${timeLeft}`}</Text>
                        </View>
                        <View style={ Styles.accesContainer }> 
                            <Text style={ TextStyles.timeLeft }>
                                Você já pode acessar sua sala de conversa Online
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Feedback')} style={ Styles.buttonAlt }>
                            <Text style={ TextStyles.buttonAlt }>Entrar na sala</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )

    }

    const ProximoAgendamento = () => {

        return(
            <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
                <View style={ Styles.MainContainer }>
                    <Text style={ TextStyles.name }>{`${name},`}</Text>
                    <Text style={ TextStyles.nextConsult }>sua próxima consulta será em</Text>
                    <View style={ Styles.timerContainer }>
                        <Text style={ TextStyles.timeLeft }>{`${timeLeft}`}</Text>
                    </View>
                    <View style={ Styles.dateContainer }>
                        <Text>
                            <Text style={ TextStyles.onDate }>no dia </Text>
                            <Text style={ TextStyles.date }>{`${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}`}</Text>
                        </Text>
                        <Text>
                            <Text style={ TextStyles.onDate }>às </Text>
                            <Text style={ TextStyles.date }>{`${hour} horas`}</Text>
                        </Text>
                    </View>
                    <View style={ Styles.informationContainer }>
                        <Text style={ TextStyles.information }>
                            Quando faltar
                            <Text style={{ fontFamily: "Montserrat-SemiBold" }}> 30 minutos </Text>
                            para a sua consulta nós iremos disponibilizar um link para uma sala de conversa online, onde será realizada sua consulta.
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Remark')} style={ Styles.button }>
                        <Text style={ TextStyles.button }>Deseja remarcar a consulta?</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        ) 

    }


    const getCurrentStage = () => {
        switch(currentStage){
            case AtendimentoStage.Carregando:
                return <Loading/>
            case AtendimentoStage.SemAgendamento:
                return <SemAgendamento/>
            case AtendimentoStage.LinkDisponivel:
                return <LinkDisponivel/>
            case AtendimentoStage.ProximoAgendamento:
                return <ProximoAgendamento/>
            default :
                return <Text>Algo deu errado</Text>
        }
        
    }


    // if(timeLeft.minutes <= 30 && timeLeft.hours == 0 && timeLeft.days == 0) {
        
        
    // } else {
        
    // }

    return getCurrentStage()

}
export default Atendimento
