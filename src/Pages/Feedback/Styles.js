import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = Dimensions.get('window').fontScale

const Styles = StyleSheet.create({
    MainContainer: {
        width,
        height,
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: '#FCF8FF'
    },
    Feedback: { 
        width: width/1.2,
        height: height/3,
        borderColor: '#000',
        borderWidth: 0.6,
        borderRadius: 8,
        padding: 10,
        color: '#000',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: fontSize * 16,
        fontFamily: 'Montserrat-Regular',
        marginVertical: height/13,
        backgroundColor: '#fff'
    },button: {
        width: width/1.5,
        height: height/11,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',    
        backgroundColor: '#743293',
        borderRadius: 6,
    },
})

export const TextStyles = StyleSheet.create({
    text: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-SemiBold'
    },
    button: {
        fontSize: fontSize * 20,
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff' 
    },
    information: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-Regular'
    }
})

export default Styles