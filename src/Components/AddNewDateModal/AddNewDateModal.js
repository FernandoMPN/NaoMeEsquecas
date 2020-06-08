import React, { useState } from 'react'
import {View,
        Text,
        TouchableOpacity,
        Image,
        Platform,
        ActionSheetIOS} from 'react-native'
import {Picker} from '@react-native-community/picker'

import Styles, {TextStyle, ModalStyle} from './Styles'
import {dayOfWeek, hours} from '../../Pages/RegisterPaciente/RegisterPaciente'

function AddNewDateModal({ addNewCallback, exit }){

    const [currentDay, setDay] = useState('none')
    const [currentHour, setHour] = useState('none')
    
    const isButtonDisabled = currentDay === 'none' || currentHour === 'none'

    const dropdownIcon = require('../../Assets/Icons/dropdown/dropdown.png')

    const returnSelectedDate = () => {
        addNewCallback({
            id: Date.now(),
            day: currentDay,
            time: currentHour
        })
    }

    const iOS_chooseDay = () => {

        const callback = (buttonIndex) => {
            if(buttonIndex !== 7)
                setDay(buttonIndex)
            else
                setDay('none')
        }
        
        const options =           {
            options: dayOfWeek.map(day => day).concat('Cancelar'),
            cancelButtonIndex: 7
        }

        ActionSheetIOS.showActionSheetWithOptions(options, callback)

    }

    const iOS_chooseHour = () => {

        const callback = (buttonIndex) => {
            if(buttonIndex !== 12)
                setHour(hours[buttonIndex])
            else
                setHour('none')
        }
        
        const options =           {
            options: hours.map(hour => hour + 'h').concat('Cancelar'),
            cancelButtonIndex: 12
        }

        ActionSheetIOS.showActionSheetWithOptions(options, callback)

    }

    const PickerIOS = ({title, onPress}) => {

        return(
            <TouchableOpacity style={ ModalStyle.pickerIOSContainer } onPress={onPress}>
                <Text>{title}</Text>
                <Image source={dropdownIcon}/>
            </TouchableOpacity>
        )

    }

    const getPicker = () => {

        if(Platform.OS === 'android'){
            return(
                <>
                    <Picker
                        selectedValue={currentDay}
                        onValueChange={(itemValue, itemIndex) => setDay(itemValue)}
                    >
                        <Picker.Item label="Selecione o dia" value="none" />

                        {dayOfWeek.map((item, index) =>  <Picker.Item key={item} label={item} value={index} />)}
                    
                    </Picker>

                    <Picker
                        selectedValue={currentHour}
                        onValueChange={(itemValue, itemIndex) => setHour(itemValue)}
                    >
                        <Picker.Item label="Selecione o horário" value="none" />

                        {hours.map((item, index) =>  <Picker.Item key={item+"h"} label={item + "h"} value={item} />)}
                        
                    </Picker>
                </>
            )
        }else if(Platform.OS === 'ios'){

            const dayTitle = currentDay === 'none'? 'Selecione o dia':dayOfWeek[currentDay]
            const hourTitle = currentHour === 'none'? 'Selecione a hora':currentHour + 'h'

            return(
                <>
                    <PickerIOS title={dayTitle} onPress={iOS_chooseDay}/>
                    <PickerIOS title={hourTitle} onPress={iOS_chooseHour}/>
                </>
            )

        }

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

                    {getPicker()}

                </View>

                <TouchableOpacity onPress={returnSelectedDate} disabled={isButtonDisabled} style={ [Styles.button, isButtonDisabled? {backgroundColor:"gray"}:null] }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Adicionar</Text>
                </TouchableOpacity>

            </TouchableOpacity>
        </TouchableOpacity>
    )

}

export default AddNewDateModal