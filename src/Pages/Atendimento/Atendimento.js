import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Styles, { TextStyles } from './Styles'
import Countdown from '../../Utils/Countdown'


function Atendimento({ navigation }) {
    Countdown.setLabels(
        ' milissegundo| segundo| minuto| hora| dia| semana| mês| ano| década| século| milênio',
        ' milissegundos| segundos| minutos| horas| dias| semanas| meses| anos| décadas| séculos| milênios',
        ' e ',
        ' + ',
        'agora')
    
    const name = 'Fulano'
    const month = 5
    const day = 30
    const hour = 19
    const minute = 0

    const date = new Date(2020, month - 1, day, hour, minute)
    const [timeLeft, setTimeLeft] = useState(Countdown(date, null, null, 2))

    useEffect(() => {
        setInterval(
            () => setTimeLeft(Countdown(date, null, null, 2)),
            1000
        )}  ,
        [setTimeLeft] )

    if(timeLeft.minutes <= 30 && timeLeft.hours == 0 && timeLeft.days == 0) {
        return(
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
        )
    } else {
        return(
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
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate()} style={ Styles.button }>
                    <Text style={ TextStyles.button }>Deseja remarcar a consulta?</Text>
                </TouchableOpacity>
            </View>
        ) 
    }

}
export default Atendimento
