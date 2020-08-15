import React from 'react'
import {View,
        Text,
        SafeAreaView,
        TouchableOpacity,} from 'react-native'

import Styles, {TextStyle} from './Styles'

function CompleteStage({ username, next }){

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <Text style={ TextStyle.nameHeader }>{username.split(" ")[0]},</Text>
                <Text style={ TextStyle.header}>obrigado por realizar um agendamento!</Text>
            

                <View style={ Styles.completeContainer }>
                    <View>
                        <Text>
                            <Text style={ TextStyle.info }>Em breve você vai receber no email informado seu</Text>
                            <Text style={ TextStyle.infoBold }> código de paciente.</Text>
                            <Text style={ TextStyle.info }>Para que possamos agendar sua consulta o mais rápido possível,</Text>
                            <Text style={ TextStyle.infoBold }> faça login no app com ele.</Text>
                        </Text>
                    </View>

                    <View>
                        <Text>
                            <Text style={ TextStyle.info }>Ao fazer login, você pode acompanhar o status do agendamento aqui pelo app.</Text>
                            <Text style={ TextStyle.infoBold }> Então, não deixe de entrar aqui para ver seus agendamentos!</Text>
                        </Text>
                    </View>
                </View>
                
                <TouchableOpacity onPress={next} style={ Styles.button }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Ir para minha página</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}

export default CompleteStage