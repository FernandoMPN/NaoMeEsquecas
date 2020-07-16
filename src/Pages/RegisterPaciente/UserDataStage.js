import React, {useState} from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        TextInput,
        Alert,
        Dimensions} from 'react-native'

import Styles, {TextStyle} from './Styles'

function UserDataStage({ username, setUsername, email, setEmail, next }){

    const [marginVertical, setScreenMargin] = useState(false)

    const handleNext = () => {

        if(username.length === 0){
            Alert.alert('Campo vazio!', 'Por favor, nos diga qual é seu nome.')
            return
        }

        if(email.length === 0){
            Alert.alert('Campo vazio!', 'Por favor, informe seu e-mail.')
            return
        }

        if(!email.includes('@')){
            Alert.alert('Campo incorreto!', 'Por favor, informe um e-mail válido.')
            return
        }

        next()

    }

    const iOS_avoidKeyboardOverlaping = () => {

        if(Platform.OS !== "ios")
            return


        if(Dimensions.get('window').height <= 670)
            return -50

    }

    return(
        <SafeAreaView>
            <View style={ [Styles.MainContainer, {marginVertical}] }>

                <View>
                    <Text style={ TextStyle.header }>Seja bem-vindo!</Text>
                    <Text style={ TextStyle.info }>Que bom ter você com a gente!</Text>
                    <Text style={ TextStyle.textMargin} >
                        <Text style={ TextStyle.info }>Antes de agendarmos seu atendimento,</Text>
                        <Text style={ TextStyle.infoBold }> precisamos saber de algumas de suas informações.</Text>
                    </Text>
                    
                </View>

                <View style={ Styles.ButtonsArea }>

                    <View>

                        <TextInput
                            style={ Styles.textInput }
                            placeholder='Nome completo'
                            onChangeText={(text) => setUsername(text)}
                            value={username}
                            placeholderTextColor="#AAA"/>

                        <TextInput
                            style={ Styles.textInput }
                            placeholder='Email'
                            autoCapitalize="none"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            onFocus={() => setScreenMargin(iOS_avoidKeyboardOverlaping())}
                            onBlur={() => setScreenMargin(0)}
                            placeholderTextColor="#AAA"/>

                    </View>

                    <TouchableOpacity onPress={handleNext} style={ Styles.button }>
                        <Text style={ TextStyle.buttonTextSemiBold }>Próximo</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </SafeAreaView>
    )

}

export default UserDataStage