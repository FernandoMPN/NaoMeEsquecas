import React, { useState, useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import { Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'

import Styles, { TextStyles } from './Styles'
import colors from '../../Utils/colors'
import Requests from '../../Utils/Requests'

const AtendimentoStage = {

    Carregando: 1,
    SemAgendamento: 2,
    ProximoAgendamento: 3,
    LinkDisponivel: 4

}

function Atendimento({ navigation }) {

    const time = new Date();
    time.setSeconds(time.getSeconds() + 10000000);

    const user = useSelector(state => state.loginReducer.user)
    const name = user.name
    const [currentStage, setStage] = useState(AtendimentoStage.Carregando)

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp:time, onExpire: () => console.warn('onExpire called') });
    

    const [consulta, setConsulta] = useState({
        id: '',
        link: '',
        data: new Date('2050-07-02T14:00:00.000Z')
    })

    useEffect(() => {

        Requests.receberProximaConsulta()
        .then(response => {
            console.log(response.data)
            if(response.data == null) {
                setStage(AtendimentoStage.SemAgendamento)
            } else {

                const date = new Date(response.data.horario)
                setConsulta({
                    id: response.data.id,
                    data: date,
                    link: user.type === 'Psicologo' ? response.data.linkHost : response.data.link
                })

                console.log(date + "ms")

                restart(date)

                setStage(AtendimentoStage.ProximoAgendamento)

            }
        })
        .catch(error =>  {                
            if(error.response.data.status)
                Alert.alert(error.response.data.status)
            else
                Alert.alert('Algo deu errado', 'Por favor, tente enviar novamente. Caso o erro persista, entre em contato conosco.')
        })
    }, [])            
    
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
                                    Você ainda não possui nenhum atendimento agendada.
                                </Text>
                            </View>


                            <View style={ Styles.accesContainer }> 
                                <Text style={ TextStyles.timeLeft }>
                                Mas não se preocupe!
                                </Text>
                                <Text style={ TextStyles.noAppointmentsSubtitle }>
                                Assim que nossa equipe agendar um atendimento para você, iremos enviar um e-mail avisando ;)
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Remark')} style={ Styles.button }>
                                <Text style={ TextStyles.button }>Deseja mudar os horários?</Text>
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
                        <Text style={ TextStyles.nextConsult }>seu próxima atendimento será em</Text>
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
                <View>
                <View style={ Styles.MainContainer }>
                    <Text style={ TextStyles.name }>{name},</Text>
                    <Text style={ TextStyles.nextConsult }>seu próximo atendimento será em</Text>
                    <View style={ Styles.timerContainer }>
        <Text style={ TextStyles.timeLeft }>{days} dias {hours} horas {minutes} minutos</Text>
                    </View>
                    <View style={ Styles.dateContainer }>
                        <Text>
                            <Text style={ TextStyles.onDate }>no dia </Text>
                            <Text style={ TextStyles.date }>{`${consulta.data.getDate() < 10 ? '0' + consulta.data.getDate() : consulta.data.getDate()}/${new Number(consulta.data.getMonth()+1) < 10 ? '0' + Number(consulta.data.getMonth()+1) : Number(consulta.data.getMonth()+1)}`}</Text>
                        </Text>
                        <Text>
                            <Text style={ TextStyles.onDate }>às </Text>
                            <Text style={ TextStyles.date }>{`${new Number(consulta.data.getHours()-3)} horas`}</Text>
                        </Text>
                    </View>
                    <View style={ Styles.informationContainer }>
                        <Text style={ TextStyles.information }>
                            Quando faltar menos que
                            <Text style={{ fontFamily: "Montserrat-SemiBold" }}> 30 minutos </Text>
                            para seu atendimento, entre na sala clicando no botão abaixo.
                        </Text>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Feedback')} style={ Styles.buttonAlt }>
                            <Text style={ TextStyles.buttonAlt }>Entrar na sala</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Remark')} style={ Styles.button }>
                        <Text style={ TextStyles.button }>Deseja remarcar o atendimento?</Text>
                    </TouchableOpacity>
                </View>
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

    return getCurrentStage()

}
export default Atendimento
