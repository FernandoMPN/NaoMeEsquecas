import {StyleSheet, Dimensions} from 'react-native'
import colors from '../../Utils/colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = Dimensions.get('window').fontScale

const Styles = StyleSheet.create({

    MainContainer:{

        width,
        height,
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: colors.backgroundColor

    },

    ButtonsArea: {
        width: '100%',
        height: height / 1.8,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    largeButton: {
        width: 240,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.button,
        borderRadius: 6,
        padding: 10
    },

    button:{
        width: 200,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.button,
        borderRadius: 6,
        padding: 10
    },

    textInput: {
        width: 250,
        height: 40,
        borderBottomColor: colors.textInput,
        borderBottomWidth: 1,
        paddingBottom: -10,
        marginVertical: 25
    },


})

export const TextStyle = StyleSheet.create({

    header: {
        fontSize: fontSize * 24,
        color: colors.loginTitle,
        marginBottom: height / 20,
        fontFamily: 'Montserrat-Bold'
    },

    info: {
        fontSize: fontSize * 18,
        fontFamily: 'Montserrat-Regular',
        color: colors.text
    },

    infoBold: {
        fontSize: fontSize * 18,
        fontFamily: 'Montserrat-Bold',
        color: colors.text
    },

    textMargin: {
        marginTop: 15
    },

    buttonText: {
        fontSize: 18,
        color: colors.buttonText,
    },

    buttonTextBold: {
        fontSize: 18,
        color: colors.buttonText,
        fontWeight: 'bold'
    },

    buttonTextSemiBold: {
        fontSize: 18,
        color: colors.buttonText,
        fontWeight: '600',
        textAlign: 'center'
    },

})

export default Styles