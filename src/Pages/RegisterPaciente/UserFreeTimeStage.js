import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        Image,
        Modal,
        ScrollView} from 'react-native'

import Styles, {TextStyle} from './Styles'

import DatePicker from '../../Components/DatePicker/DatePicker'

function UserFreeTimeStage({ userFreetimeCallback, next }){

    const [userHours, setNewHour] = useState([])

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

        userFreetimeCallback(data)
        next()
    }

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <Text style={ [TextStyle.header, {marginBottom:5}] }>Agora, precisamos saber quais são os horários que você prefere ser atendido</Text>
                        <Text style={ TextStyle.info }>Marque os horários que você tem disponível nos próximos 7 dias.</Text>
                        <Text style={ TextStyle.info }>As consultas tem duração máxima de </Text>
                        <Text style={ TextStyle.infoBold }>1 hora.</Text>

                <View style={ Styles.itensContainer }>
                    <DatePicker showDay day={Date.now()} selectedValues={userHours} addNewHour={addNewItem}/>
                </View>

                <TouchableOpacity onPress={setHours} disabled={isButtonDisabled} style={ [Styles.button, isButtonDisabled? {backgroundColor:"gray"}:null] }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Próximo</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}

export default UserFreeTimeStage