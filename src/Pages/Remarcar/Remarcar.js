import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        Image,
        Modal,
        ScrollView} from 'react-native'

import Styles, {TextStyle} from './Styles'
import {getTextDate} from '../RegisterPaciente/RegisterPaciente'
import AddNewDateModal from '../../Components/AddNewDateModal/AddNewDateModal'
import Requests from '../../Utils/Requests'

function Remarcar({ navigation }){

    const [userHours, setNewHour] = useState([])
    const [isModalVisible, setModalVisibility] = useState(false)
    const [addMoreDisabled, disableAddMore] = useState(false)

    const removeIcon = require('../../Assets/Icons/remove/remove.png')
    const addNewIcon = require('../../Assets/Icons/addnew/addnew.png')
    const isButtonDisabled = userHours.length === 0

    const changeModalVisibility = () => {
        setModalVisibility(!isModalVisible)
    }

    const checkAddMore = (itemsAdded) => {
        
        if(itemsAdded === 6){
            disableAddMore(true)
        }else{
            disableAddMore(false)
        }

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

        setNewHour(prev => {
            checkAddMore(prev.length + 1)
            return prev.concat(item)
        })
        

    }

    const removeItem = (itemID) => {
        setNewHour(prev => {
            checkAddMore(prev.length - 1)
            return prev.filter(item => item.id !== itemID)
        })
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

    const setHours = () => {
        console.log(userHours)
        Requests.atualizarPreferenciaHorario(userHours)
            .then(response => {
                navigation.navigate('MainPage')
            })
            .catch(error =>  {                
                if(error.response.data.status)
                    Alert.alert(error.response.data.status)
                else
                    Alert.alert('Algo deu errado', 'Por favor, tente enviar novamente. Caso o erro persista, entre em contato conosco.')
            })
    }

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <Modal visible={isModalVisible} transparent={true} animationType="fade">
                    <AddNewDateModal exit={changeModalVisibility} addNewCallback={addNewItem}/>
                </Modal>

                <Text style={ TextStyle.header }>Deseja mesmo Remarcar? Nos diga então quais horários você prefere ser atendido</Text>

                <TouchableOpacity activeOpacity={0.8} disabled={addMoreDisabled} onPress={changeModalVisibility}>
                    <View style={ [Styles.addNewButton, addMoreDisabled? {backgroundColor: "gray"}:null]}>
                        <Text style={ TextStyle.buttonText }>Adicionar novo horário</Text>

                        <View style={ Styles.addNewIcon }>
                            <Image source={addNewIcon}/>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={ Styles.itensContainer }>
                    <ScrollView style={{width: "100%"}}>
                        {userHours.map(date => <HourItem key={date.day + "#" + date.time} date={date}/>)}
                    </ScrollView>
                </View>

                <TouchableOpacity onPress={setHours} disabled={isButtonDisabled} style={ [Styles.button, isButtonDisabled? {backgroundColor:"gray"}:null] }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Próximo</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}

export default Remarcar