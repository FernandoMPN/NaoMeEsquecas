import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        StatusBar,
        TouchableOpacity,
        Image,
        Modal,
        ScrollView,} from 'react-native'
import {Picker} from '@react-native-community/picker'

import Styles, {TextStyle, ModalStyle} from './Styles'
import colors from '../../Utils/colors'

const dayOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
const hours = [8,9,10,11,12,13,14,15,16,17,18,19]

const getTextDate = (day, time) => {

    const endTime = time + 1

    return dayOfWeek[day] + ', ' + time + '-' + endTime + 'h'
}

function AddNewDateModal({ addNewCallback, exit }){

    const [currentDay, setDay] = useState('none')
    const [currentHour, setHour] = useState('none')
    
    const isButtonDisabled = currentDay === 'none' || currentHour === 'none'

    const returnSelectedDate = () => {
        addNewCallback({
            id: Date.now(),
            day: currentDay,
            time: currentHour
        })
    }

    return(
        <TouchableOpacity activeOpacity={1} onPress={exit} style={ ModalStyle.Container }>
            <TouchableOpacity activeOpacity={1} style={ ModalStyle.MainArea }>
                <Text>
                    <Text style={ TextStyle.modalHeader }>Selecione</Text>
                    <Text style={ TextStyle.modalHeaderBold }> um dia da semana e um horário </Text>
                    <Text style={ TextStyle.modalHeader }>que você tem disponível</Text>
                </Text>

                <Text style={ TextStyle.textMargin }>As consultas tem duração de 1 hora</Text>
    
                <View style={ ModalStyle.pickerArea }>

                    <Picker
                        selectedValue={currentDay}
                        onValueChange={(itemValue, itemIndex) => setDay(itemValue)}
                    >
                        <Picker.Item label='Selecione o dia' value='none' />

                        {dayOfWeek.map((item, index) =>  <Picker.Item key={item} label={item} value={index} />)}
                    
                    </Picker>

                    <Picker
                        selectedValue={currentHour}
                        onValueChange={(itemValue, itemIndex) => setHour(itemValue)}
                    >
                        <Picker.Item label='Selecione o horário' value='none' />

                        {hours.map((item, index) =>  <Picker.Item key={item+'h'} label={item + 'h'} value={item} />)}
                    
                    </Picker>

                </View>

                <TouchableOpacity onPress={returnSelectedDate} disabled={isButtonDisabled} style={ [Styles.button, isButtonDisabled? {backgroundColor:'gray'}:null] }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Adicionar</Text>
                </TouchableOpacity>

            </TouchableOpacity>
        </TouchableOpacity>
    )

}

function Remarcar({ navigation }){

    /*
    * TODO: userHours deve receber o estado anterior
    */
    const [userHours, setNewHour] = useState([])
    const [isModalVisible, setModalVisibility] = useState(false)

    const removeIcon = require('../../Assets/Icons/remove/remove.png')
    const isButtonDisabled = userHours.length === 0

    const changeModalVisibility = () => {
        setModalVisibility(!isModalVisible)
    }

    const addNewItem = (item) => {

        const reducer = (accumulator, current) => {

            if(accumulator)
                return true

            if(current.day === item.day && current.time === item.time)
                return true
            else 
                return false

        }

        const isTherePrev = userHours.reduce(reducer, false)

        changeModalVisibility()
        if(isTherePrev)
            return

        setNewHour(prev => prev.concat(item))

    }

    const removeItem = (itemID) => {
        setNewHour(prev => prev.filter(item => item.id !== itemID))
    }

    const HourItem = ({date}) => {

        const text = getTextDate(date.day, date.time)

        return(
            <View style={ Styles.hourItem }>
                <Text style={ TextStyle.date }>{text}</Text>
                <TouchableOpacity onPress={() => removeItem(date.id)}>
                    <Image source={removeIcon}/>
                </TouchableOpacity>
             </View>
        )

    }

    /*
    * TODO: userHours deve enviar os novos horários
    */
    const setHours = () => {
        console.log(userHours)
        navigation.navigate('MainPage')
    }

    return(
        <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
            <View style={ Styles.MainContainer }>

                <Modal visible={isModalVisible} transparent={true} animationType='fade'>
                    <AddNewDateModal exit={changeModalVisibility} addNewCallback={addNewItem}/>
                </Modal>

                <Text style={ TextStyle.header }>Deseja mesmo Remarcar? Nos diga então quais horários você prefere ser atendido</Text>

                <TouchableOpacity activeOpacity={0.8} onPress={changeModalVisibility}>
                    <View style={ Styles.addNewButton }>
                        <Text style={ TextStyle.buttonText }>Adicionar novo horário</Text>

                        <View style={ Styles.addNewIcon }/>

                    </View>
                </TouchableOpacity>

                <View style={ Styles.itensContainer }>
                    <ScrollView style={{width: '100%'}}>
                        {userHours.reverse().map(date => <HourItem key={date.day + '#' + date.time} date={date}/>)}
                    </ScrollView>
                </View>

                <TouchableOpacity onPress={setHours} disabled={isButtonDisabled} style={ [Styles.button, isButtonDisabled? {backgroundColor:'gray'}:null] }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Pronto</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}

export default Remarcar