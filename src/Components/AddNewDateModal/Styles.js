import {StyleSheet, Dimensions, Platform} from 'react-native'
import colors from '../../Utils/colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = Dimensions.get('window').fontScale

const Styles = StyleSheet.create({

    button:{
        width: 200,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.button,
        borderRadius: 6,
        padding: 10,
        alignSelf: 'center'
    }


})

export const TextStyle = StyleSheet.create({

    nameHeader:{
        fontSize: fontSize * 24,
        color: colors.registerTitle,
        fontFamily: 'Montserrat-Bold'
    },

    header: {
        fontSize: fontSize * 24,
        color: colors.registerTitle,
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

    radioButton:{
        fontSize: 18,
        color: colors.text
    },

    date: {
        fontSize: 16,
        color: colors.text
    },

    modalHeader:{
        fontSize: 18,
        color: colors.text
    },

    modalHeaderBold:{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.registerTitle
    },

    infoTitle:{
        fontSize: 12,
        color: '#404B5A'
    },

    infoContent:{
        fontSize: 18,
        fontWeight: '700',
        color: colors.text
    }

})

export const ModalStyle = StyleSheet.create({

    Container:{
        width,
        height,
        backgroundColor: 'rgba(0,0,0, 0.5)',

        justifyContent: 'center',
        alignItems: 'center'
    },

    MainArea: {
        width: width / 1.2,
        backgroundColor: colors.modal,
        borderRadius: 8,
        padding: 20
    },

    pickerArea: {

        width: '100%',
        height: height / 4.5,
        justifyContent: 'space-evenly'

    },

    pickerIOSContainer:{
        width: "100%",
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    }


})

export default Styles