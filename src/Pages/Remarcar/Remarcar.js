import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        Image,
        Modal,
        ScrollView,
        Alert } from 'react-native'

import Styles, {TextStyle} from './Styles'
import {getTextDate} from '../RegisterPaciente/RegisterPaciente'
import DatePicker from '../../Components/DatePicker/DatePicker'
import Requests from '../../Utils/Requests'
import Loading from '../../Components/Loading/Loading'

function Remarcar({ navigation }){

    const [userHours, setNewHour] = useState([])
    const [isLoading, setLoadingState] = useState(false)

    const isButtonDisabled = userHours.length === 0

    const addNewItem = (currentDay, hour) => {

        const hourID = currentDay + "-" + hour

        if(userHours.includes(hourID)){
            setNewHour(userHours.filter(id => id != hourID))
            return
        }

        setNewHour(userHours.concat(hourID))
        

    }

    const setHours = () => {
        
        const currentMs = Date.now()

        const data = userHours.map(item => {

            const [ dayOfWeek, hour ] = item.split("-")

            const date = new Date()

            const newMs = currentMs + (86400000 * (Number.parseInt(dayOfWeek)+1))

            date.setTime(newMs)
            const UTCHour = Number.parseInt(hour) + 3
            date.setUTCHours(UTCHour, 0, 0, 0, 0)

            return date

        })

        setLoadingState(true)

        Requests.atualizarPreferenciaHorario(data)
            .then(response => {
                navigation.navigate('MainPage')
                setLoadingState(false)
            })
            .catch(error =>  {   
                setLoadingState(false)             
                if(error.response.data.status !== undefined)
                    Alert.alert(error.response.data.status)
                else
                    Alert.alert('Algo deu errado', 'Por favor, tente enviar novamente. Caso o erro persista, entre em contato conosco.')
            })
    }

    return(
        <>
        {isLoading? <Loading/>:null}
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <Text style={ TextStyle.header }>Deseja mesmo remarcar? Nos diga, então, quais os novos horários que você prefere ser atendido</Text>

                <View style={ Styles.itensContainer }>
                    <DatePicker showDay day={Date.now()} selectedValues={userHours} addNewHour={addNewItem}/>
                </View>

                <TouchableOpacity onPress={setHours} disabled={isButtonDisabled} style={ [Styles.button, isButtonDisabled? {backgroundColor:"gray"}:null] }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Próximo</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
        </>
    )

}

export default Remarcar