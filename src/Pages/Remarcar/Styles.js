import {StyleSheet, Dimensions} from 'react-native'
import colors from '../../Utils/colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = Dimensions.get('window').fontScale

const Styles = StyleSheet.create({
    MainContainer: {
        width,
        height,
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: colors.backgroundColor
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
        marginRight: -12
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
    }
})

export const TextStyle = StyleSheet.create({
    header: {
        fontSize: fontSize * 24,
        color: colors.registerTitle,
        marginBottom: height / 20,
        fontFamily: 'Montserrat-Bold'
    },
    textMargin: {
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        color: colors.buttonText,
    },
    buttonTextSemiBold: {
        fontSize: 18,
        color: colors.buttonText,
        fontWeight: '600',
        textAlign: 'center'
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
        height: height / 2,
        backgroundColor: colors.modal,
        borderRadius: 8,
        padding: 20
    },
    pickerArea: {
        width: '100%',
        height: height / 4.5,
        justifyContent: 'space-evenly'
    }
})

export default Styles