import React from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        TextInput,
        Alert} from 'react-native'

import Styles, {TextStyle} from './Styles'

function UserDataStage({ username, setUsername, email, setEmail, next }){

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

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

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
                            value={username}/>

                        <TextInput
                            style={ Styles.textInput }
                            placeholder='Email'
                            onChangeText={(text) => setEmail(text)}
                            value={email}/>

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