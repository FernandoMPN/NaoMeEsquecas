import { StyleSheet, Dimensions } from 'react-native'

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
    timerContainer: {
        width: width/1.2,
        height: height/10,
        backgroundColor: colors.timer,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: height/15
    },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height/50
    },
    informationContainer: {
        marginTop: height/15
    },
    button: {
        width: width/1.5,
        height: height/18,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',    
        backgroundColor: colors.button,
        borderRadius: 6,
        marginVertical: height/20
    },
    buttonAlt: {
        width: width/1.5,
        height: height/10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',    
        backgroundColor: colors.button,
        borderRadius: 6,
        marginVertical: height/20
    },
    accesContainer: {
        marginVertical: height/15
    }
})

export const TextStyles = StyleSheet.create({
    name: {
        fontSize: fontSize * 25,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.text
    },
    nextConsult: {
        fontSize: fontSize * 21,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.text
    },
    timeLeft: {
        fontSize: fontSize * 20,
        fontFamily: 'Montserrat-Bold',
        color: colors.text,
        textAlign: 'center'
    },
    onDate: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.text
    },
    date: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-Bold',
        color: colors.text
    },
    information: {
        fontSize: fontSize * 18,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        color: colors.text
    },
    button: {
        fontSize: fontSize * 16,
        fontFamily: 'Montserrat-Regular',
        color: colors.buttonText 
    },
    buttonAlt: {
        fontSize: fontSize * 20,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.buttonText 
    },
})

export default Styles