import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        Image,
        Modal,
        ScrollView} from 'react-native'

import Styles, {TextStyle} from '../RegisterPaciente/Styles'
import {getTextDate} from '../RegisterPaciente/RegisterPaciente'

import DatePicker from '../../Components/DatePicker/DatePicker'

function PsicoFreeTime({ psicoFreetimeCallback, next }){

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

        const data = userHours.map(item => {

            const [ dayOfWeek, hour ] = item.split("-")

            return {
                day: dayOfWeek,
                time: hour
            }

        })
        console.log(data)
        // userFreetimeCallback(data)
        // next()
    }

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <Text style={ TextStyle.header }>Agora, precisamos saber quais são os horários que você prefere atender</Text>

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

export default PsicoFreeTime