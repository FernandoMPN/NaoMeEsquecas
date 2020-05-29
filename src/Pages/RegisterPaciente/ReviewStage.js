import React from 'react'
import {View,
        Text,
        SafeAreaView,
        StatusBar,
        TouchableOpacity,
        ScrollView,} from 'react-native'

import Styles, {TextStyle} from './Styles'
import {getTextDate} from './RegisterPaciente'

function ReviewStage({ username, email, preference, userType, hours, next }){

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <Text style={ TextStyle.header }>E por último...</Text>
                <Text style={ TextStyle.info }>Confira se todas as informações estão corretas.</Text>

                <View style={ Styles.reviewContainer }>

                    <View>
                        <Text style={ TextStyle.infoTitle }>Nome</Text>
                        <Text style={ TextStyle.infoContent }>{username}</Text>
                    </View>

                    <View>
                        <Text style={ TextStyle.infoTitle }>E-mail</Text>
                        <Text style={ TextStyle.infoContent }>{email}</Text>
                    </View>

                    <View>
                        <Text style={ TextStyle.infoTitle }>Preferência de Atendimento</Text>
                        <Text style={ TextStyle.infoContent }>{preference}</Text>
                    </View>

                    <View>
                        <Text style={ TextStyle.infoTitle }>Tipo de usuário</Text>
                        <Text style={ TextStyle.infoContent }>{userType}</Text>
                    </View>

                    <View>
                        <Text style={ TextStyle.infoTitle }>Horários disponíveis</Text>
                        <View style={{height: 58}}>
                            <ScrollView>
                                {hours.map(item => <Text key={item.day + '#' + item.time} style={ TextStyle.infoContent }>{getTextDate(item.day, item.time)}</Text>)}
                            </ScrollView>
                        </View>
                    </View>

                </View>

                <TouchableOpacity onPress={next} style={ Styles.button }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Confirmar e enviar</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}

export default ReviewStage