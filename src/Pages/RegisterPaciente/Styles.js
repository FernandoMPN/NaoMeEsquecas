import {StyleSheet, Dimensions, Platform} from 'react-native'
import colors from '../../Utils/colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = 1

const Styles = StyleSheet.create({

    MainContainer: {
        width,
        height,
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: colors.backgroundColor
    },

    ButtonsArea: {
        width: '100%',
        height: height / 1.9,
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
        padding: 10,
        alignSelf: 'center'
    },

    textInput: {
        width: 250,
        height: 40,
        borderBottomColor: colors.textInput,
        borderBottomWidth: 1,
        paddingBottom: -10,
        marginVertical: 25,
        color: "black"
    },

    checkButton:{
        width: '80%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },

    checkButtonPicker: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#041639',
        marginRight: 8
    },

    checkTextArea:{
        width: 142
    },

    addNewButton:{
        width: '100%',
        maxWidth: 340,
        height: 50,
        backgroundColor: colors.button,
        borderRadius: 100,
        padding: 12,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    itensContainer:{
        width: '100%',
        height: height / 1.9,
        paddingVertical: 10,
        alignItems: 'center',
    },

    addNewIcon:{
        width: 49,
        height: 49,
        borderRadius: 100,
        backgroundColor: colors.dateItems,
        borderWidth: 1,
        borderColor: colors.button,
        marginTop: -12,
        marginRight: -12,
        alignItems: 'center',
        justifyContent: 'center'
    },

    hourItem:{
        width: '100%',
        maxWidth: 340,
        height: 50,
        backgroundColor: colors.dateItems,
        borderRadius: 4,
        padding: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 5
    },

    reviewContainer:{
        width: '100%',
        height: height / 1.9,
        paddingHorizontal: 40,
        justifyContent: 'space-evenly'
    },

    completeContainer:{
        width: '100%',
        height: height / 1.9,
        justifyContent: 'space-evenly'
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