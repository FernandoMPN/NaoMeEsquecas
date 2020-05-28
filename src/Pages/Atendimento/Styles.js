import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = Dimensions.get('window').fontScale

const Styles = StyleSheet.create({
    MainContainer: {
        width,
        height,
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#FCF8FF'
    },
    timerContainer: {
        width: width/1.2,
        height: height/9,
        backgroundColor: '#EBDCF5',
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
        backgroundColor: '#743293',
        borderRadius: 6,
        marginVertical: height/20
    },
    buttonAlt: {
        width: width/1.5,
        height: height/10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',    
        backgroundColor: '#743293',
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
        fontFamily: 'Montserrat-SemiBold'
    },
    nextConsult: {
        fontSize: fontSize * 21,
        fontFamily: 'Montserrat-SemiBold'
    },
    timeLeft: {
        fontSize: fontSize * 23,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center'
    },
    onDate: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-SemiBold'
    },
    date: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-Bold'
    },
    information: {
        fontSize: fontSize * 18,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center'
    },
    button: {
        fontSize: fontSize * 16,
        fontFamily: 'Montserrat-Regular',
        color: '#fff' 
    },
    buttonAlt: {
        fontSize: fontSize * 20,
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff' 
    },
})

export default Styles