import React, { useState, useRef } from 'react'
import {View,
        Text,
        TouchableOpacity,
        ScrollView} from 'react-native'

import Styles, { TextStyle } from './Styles'
import {dayOfWeek, hours} from '../../Pages/RegisterPaciente/RegisterPaciente'
import colors from '../../Utils/colors'
import { add } from 'react-native-reanimated'

function Item({hour, isSelected, onPress}){

    const onSelect = () => {
        onPress(hour)
    }   

    return(
        <TouchableOpacity style={ Styles.item } onPress={onSelect}>

            <View style={ [Styles.itemSelectorIndicator, isSelected? {backgroundColor: colors.statusBar}:null] } />

            <Text style={ TextStyle.buttonText }>{hour}h - {hour+1}h</Text>

        </TouchableOpacity>
    )

}

function DatePicker({values, selectedValues, addNewHour, day, showDay}){

    const [currentDay, changeDay] = useState(0)
    const [addValue, changeAddValue] = useState(1)

    const listRef = useRef()

    const nextDay = () => {

        let aux = currentDay
        let aux2 = addValue

        if(currentDay == 6){
            changeDay(0)
            changeAddValue(1)
        } else{
            aux = aux + 1
            aux2 = aux2 + 1
            changeDay(aux)
            changeAddValue(aux2)
            listRef.current.scrollTo({y:0})
        }

    }

    const prevDay = () => {

        let aux = currentDay
        let aux2 = addValue

        if(currentDay == 0){
            changeDay(6)
            changeAddValue(7)
        } else{
            aux = aux - 1
            aux2 = aux2 - 1
            changeDay(aux)
            changeAddValue(aux2)
            listRef.current.scrollTo({y:0})
        }

    }

    const getHeaderTitle = () => {

        if(showDay){

            const date = new Date()

            const newMs = day + (86400000 * addValue)

            date.setTime(newMs)

            return dayOfWeek[date.getDay()] + " - " + date.getDate() + "/" + (date.getMonth()+1) 

        }

        return dayOfWeek[currentDay]

    }

    const callback_addNewHour = (hour) => {
        addNewHour(currentDay, hour)
    }

    return(
        <View style={ Styles.MainArea }>

            <View style={ Styles.header }>
                <TouchableOpacity onPress={prevDay}>
                    <Text style={ TextStyle.buttonTextBold }>{`<`}</Text>
                </TouchableOpacity>
                
                <Text style={ TextStyle.buttonTextBold }>{getHeaderTitle()}</Text>

                <TouchableOpacity onPress={nextDay}>
                    <Text style={ TextStyle.buttonTextBold }>{`>`}</Text>
                </TouchableOpacity>
            </View>

            <View style={ Styles.itemsArea }>
                
                <ScrollView style={{width: "100%"}} ref={ ref => listRef.current = ref } >
                    {hours.map(hour => <Item key={hour.toString()} hour={hour} onPress={callback_addNewHour}
                                        isSelected={selectedValues.includes(currentDay + "-" + hour)}/>)}
                </ScrollView>

            </View>


        </View>
    )

}

export default DatePicker