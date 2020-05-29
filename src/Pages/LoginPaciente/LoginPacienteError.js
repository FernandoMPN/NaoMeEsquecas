import React from 'react'
import {View,
        Text,
        SafeAreaView,
        StatusBar,
        TouchableOpacity} from 'react-native'

import Styles, {TextStyle} from './Styles'


function LoginPacienteError({ navigation, route }){

    const errorType  = route.params === undefined? 2:route.params.errorType

    const errorMessage = {
        emailNotFound: "Não encontramos seu email em nosso banco de dados.",
        pacientCodeNotFound: "Não encontramos seu código de paciente em nosso banco de dados.",
        none: "Tente novamente."
    }

    const setErrorMessage = () => {

        switch(errorType){
            case 1:
                return errorMessage.emailNotFound
            case 2:
                return errorMessage.pacientCodeNotFound
            default:
                return errorMessage.none
        }

    }

    const setButton = () => {

        const Email = () => {

            return(
                <TouchableOpacity onPress style={ Styles.largeButton }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Digitar o email novamente</Text>
                </TouchableOpacity>

            )
        }

        const TryAgain = () => {

            return(
                <TouchableOpacity style={ Styles.largeButton }>
                    <Text style={ TextStyle.buttonTextSemiBold }>Digitar o código novamente</Text>
                </TouchableOpacity>
            )
        }

        switch(errorType){
            case 1:
                return <Email/>
            case 2:
                return <TryAgain/>
            default:
                return null
        }

    }

    return(
        <SafeAreaView>
            <View style={ Styles.MainContainer }>

                <View>
                    <Text style={ TextStyle.header }>Ocorreu um erro!</Text>
                    <Text style={ TextStyle.info }>{setErrorMessage()}</Text>
                    <Text style={ [TextStyle.info, TextStyle.textMargin] }>Selecione uma das opções abaixo para entrar no nosso aplicativo.</Text>
                </View>

                <View style={ Styles.ButtonsArea }>
                    
                    {setButton()}

                    <TouchableOpacity style={ Styles.largeButton }>
                        <Text style={ TextStyle.buttonTextSemiBold }>Fazer um cadastro</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </SafeAreaView>
    )

}

export default LoginPacienteError