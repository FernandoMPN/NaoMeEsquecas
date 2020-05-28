import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Styles, { TextStyles } from './Styles'

function Atendimento({ navigation }) {

    const name = 'Fulano'
    const timeLeft = '4 dias e 16 horas'
    const day = '18/05'
    const hour = '13'

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
                    <Text style={ TextStyles.date }>{`${day}`}</Text>
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
export default Atendimento
