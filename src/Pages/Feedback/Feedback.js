import React, { useState } from 'react'
import { TextInput, View, Text, TouchableOpacity, Alert } from 'react-native'

import Styles, { TextStyles } from './Styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../Utils/colors'

import Loading from '../../Components/Loading/Loading'
import Requests from '../../Utils/Requests'

function Feedback() {

    const [value, onChangeText] = React.useState('')

    const [isLoading, setLoadingStatus] = useState(false)

    const submitFeedback = () => {

        if(value.length === 0){
            Alert.alert('Para enviar um feedback, insira alguma mensagem!')
            return
        }

        onChangeText('')

        setLoadingStatus(true)

        Requests.enviarFeedback(value)
            .then(response => {

                setLoadingStatus(false)
                Alert.alert('Obrigado!', 'Recebemos seu feedback! Se necessário, nossa equipe entrará em contato com você ;)')

            })
            .catch(error => {

                setLoadingStatus(false)
                if(error.response.data.status)
                    Alert.alert(error.response.data.status)
                else
                    Alert.alert('Ocorreu um erro', 'Por favor, tente enviar novamente. Caso o erro persista, entre em contato com o suporte')

            })

    }

    return(
        <>
        <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
            <View style={ Styles.MainContainer }>
                <Text style={ TextStyles.information }>
                    <Text style={{ fontFamily: "Montserrat-SemiBold" }}>Tem alguma</Text>
                    <Text style={{ fontFamily: "Montserrat-Bold" }}> Dica, Sugestão ou Reclamação? </Text>
                </Text>
                <Text style={ [TextStyles.text, {marginTop: 5}] }>Então, envie-nos o seu feedback!</Text>
                <TextInput
                    style={ Styles.Feedback }
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    multiline={true}
                    placeholder = 'Escreva o seu feedback'
                    textAlignVertical='top'
                    maxLength={300}
                />
                <TouchableOpacity activeOpacity={0.8} onPress={submitFeedback} style={ Styles.button }>
                    <Text style={ TextStyles.button }>Enviar feedback</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {isLoading? <Loading/>:null}
        </>
    ) 
}

export default Feedback
