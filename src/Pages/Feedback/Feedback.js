import React from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'

import Styles, { TextStyles } from './Styles'

function Feedback() {
    const [value, onChangeText] = React.useState('')

    return(
        <View style={ Styles.MainContainer }>
            <Text style={ TextStyles.information }>
                <Text style={{ fontFamily: "Montserrat-SemiBold" }}>Tem alguma</Text>
                <Text style={{ fontFamily: "Montserrat-Bold" }}> Dica, Sugestão ou Reclamação? </Text>
            </Text>
            <Text style={ TextStyles.text }>Então envie-nos o seu feedback.</Text>
            <TextInput
                style={ Styles.Feedback }
                onChangeText={text => onChangeText(text)}
                value={value}
                multiline={true}
                placeholder = 'Escreva o seu feedback'
                textAlignVertical='top'
                maxLength={300}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate()} style={ Styles.button }>
                <Text style={ TextStyles.button }>Enviar feedback</Text>
            </TouchableOpacity>
        </View>
    ) 
}

export default Feedback
