import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        StatusBar,
        TouchableOpacity,
        Alert} from 'react-native'

import Styles, {TextStyle} from './Styles'

function UserPreferencesStage({ username, preferencesCallback, next }){

    const [preferences, setPreferences] = useState('')

    const checkButton = (title) => {
        setPreferences(title)
    }

    const handleNext = () => {

        if(preferences.length === 0){
            Alert.alert('Campo vazio!', 'Por favor, selecione sua preferência de atendimento.')
            return
        }

        preferencesCallback(preferences)
        next()
    }

    const RadioButton = ({title}) => {

        return(
            <View style={ Styles.checkButton }>
                <TouchableOpacity onPress={() => checkButton(title)} style={ [Styles.checkButtonPicker, preferences === title? {backgroundColor: "#000000"}:null] }/>
                <View style={ Styles.checkTextArea }>
                    <Text style={ TextStyle.radioButton }>{title}</Text>
                </View>
             </View>
        )

    }

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <StatusBar backgroundColor='#743293'/>

                <View>
                    <Text style={ TextStyle.header }>Seja bem-vindo!</Text>
                    <Text style={ TextStyle.info }>Olá, {username.split(' ')[0]}!</Text>
                    <Text style={ TextStyle.textMargin} >
                        <Text style={ TextStyle.info }>Agora nos diga,</Text>
                        <Text style={ TextStyle.infoBold }> você prefere ser atendido por...</Text>
                    </Text>

                    <View style={ Styles.ButtonsArea }>

                        <View>
                            <RadioButton title="Homens"/>
                            <RadioButton title="Mulheres"/>
                            <RadioButton title="Indiferente"/>
                        </View>

                    </View>

                    <TouchableOpacity onPress={handleNext} style={ Styles.button }>
                            <Text style={ TextStyle.buttonTextSemiBold }>Próximo</Text>
                        </TouchableOpacity>

                    
                </View>

            </View>
        </SafeAreaView>
    )

}

export default UserPreferencesStage