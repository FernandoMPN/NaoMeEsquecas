import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Modal, ScrollView } from 'react-native'

import Styles, { TextStyles } from './Styles'
import { termoDeAdesao } from '../../Utils/texts'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../Utils/colors'

export function Termos({ setVisibility }) {
    return(
        <View style={ Styles.modal }>
            <ScrollView>
                <Text style={ TextStyles.longText }>{termoDeAdesao}</Text>                    
            </ScrollView>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setVisibility(false)} style={ Styles.backButton }>
                <Text style={ TextStyles.button }>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export function About() {
    const version = '0.1'

    return(
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 4 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1.2 }}>
                <Text style={ TextStyles.about }>Sobre o App</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 4 }}>
                <Text style={ TextStyles.subtitle }>Desenvolvedores</Text>
                <Text style={ TextStyles.text }>Alan Willy Leiser</Text>
                <Text style={ TextStyles.text }>Fernando Morgado Pires Neto</Text>
                <Text style={ TextStyles.text }>Renan Ricoldi Fróis Pedro</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
                <Text style={ TextStyles.subtitle }>Versão do App</Text>
                <Text style={ TextStyles.text }>{`${version}`}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 3 }}>
                <Text style={ TextStyles.subtitle }>Professores Envolvidos</Text>
                <Text style={ TextStyles.text }>Elaine Matheus</Text>
                <Text style={ TextStyles.text }>Jacques Duílio Brancher</Text>
            </View>
        </View>
    )
}

function Configuracao({ navigation }) {
    const [visible, setVisibility] = useState(false)

    return(
        <SafeAreaView style={{ backgroundColor: colors.statusBar }}>
            <View style={ Styles.MainContainer }>
                <Modal visible={visible} transparent={true} animationType='fade'>
                    <Termos setVisibility={setVisibility} />
                </Modal>
                <Text style={ TextStyles.title }>Configurações</Text>
                <View style={ Styles.aboutContainer}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setVisibility(true)} style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text style={ TextStyles.terms }>Termos Legais</Text>
                    </TouchableOpacity>
                    <About />
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Home')} style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text style={ TextStyles.logout }>Sair do App</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    ) 
}
export default Configuracao
