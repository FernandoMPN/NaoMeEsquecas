import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../Utils/colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = 1

const Styles = StyleSheet.create({
    MainContainer: {
        width,
        height,
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: colors.backgroundColor
    },
    Feedback: { 
        width: width/1.2,
        height: height/3,
        borderColor: '#000',
        borderWidth: 0.6,
        borderRadius: 8,
        padding: 10,
        color: colors.text,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: fontSize * 16,
        fontFamily: 'Montserrat-Regular',
        marginVertical: height/13,
        backgroundColor: colors.feedback
    },button: {
        width: width/1.5,
        height: height/11,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',    
        backgroundColor: colors.button,
        borderRadius: 6,
    },
})

export const TextStyles = StyleSheet.create({
    text: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.text
    },
    button: {
        fontSize: fontSize * 20,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.buttonText
    },
    information: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-Regular',
        color: colors.text
    }
})

export default Styles