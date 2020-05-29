import React, { useState } from 'react'
import {View,
        Text,
        SafeAreaView,
        StatusBar,
        TouchableOpacity,
        Alert} from 'react-native'

import Styles, {TextStyle} from './Styles'

function UserTypeStage({ userTypeCallback, next }){

    const [usertype, setUsertype] = useState('')

    const checkButton = (title) => {
        setUsertype(title)
    }

    const handleNext = () => {

        if(usertype.length === 0){
            Alert.alert('Campo vazio!', 'Por favor, selecione seu tipo de usuário.')
            return
        }

        userTypeCallback(usertype)
        next()
    }

    const RadioButton = ({title}) => {

        return(
            <View style={ Styles.checkButton }>
                <TouchableOpacity onPress={() => checkButton(title)} style={ [Styles.checkButtonPicker, usertype === title? {backgroundColor: "#000000"}:null] }/>
                <View style={ Styles.checkTextArea }>
                    <Text style={ TextStyle.radioButton }>{title}</Text>
                </View>
             </View>
        )

    }

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <View>
                    <Text style={ TextStyle.header }>Seja bem-vindo!</Text>
                    <Text style={ TextStyle.info }>Já estamos quase finalizando!</Text>
                    <Text style={ TextStyle.textMargin} >
                        <Text style={ TextStyle.info }>Para melhor direcionarmos suas consultas,</Text>
                        <Text style={ TextStyle.infoBold }> precisamos saber agora que tipo de usuário é você.</Text>
                    </Text>

                    <View style={ Styles.ButtonsArea }>

                        <View>
                            <RadioButton title="Cuidador informal"/>
                            <RadioButton title="Cuidador formal"/>
                            <RadioButton title="Pessoa 60+"/>
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

export default UserTypeStage