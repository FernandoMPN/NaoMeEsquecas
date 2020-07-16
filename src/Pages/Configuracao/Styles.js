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
    aboutContainer: { 
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'center', 
        paddingBottom: height/10
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
    backButton: {
        width: width/1.5,
        height: height/18,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',    
        backgroundColor: colors.button,
        borderRadius: 6,
        marginVertical: height/40
    },
    modal: { 
        width: '100%', 
        height: '100%', 
        backgroundColor: colors.backgroundColor, 
        paddingTop: height/40, 
        paddingHorizontal: 30
    }
})

export const TextStyles = StyleSheet.create({
    title: {
        fontSize: fontSize * 24,
        fontFamily: 'Montserrat-Bold',
        color: colors.text,
    },
    terms: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-Bold',
        color: colors.text,
        textDecorationLine: 'underline'
    },
    about: {
        fontSize: fontSize * 22,
        fontFamily: 'Montserrat-Bold',
        color: colors.text,
    },
    subtitle: {
        fontSize: fontSize * 17,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.text,
    },
    text: {
        fontSize: fontSize * 17,
        fontFamily: 'Montserrat-Regular',
        color: colors.text,
    },
    logout: {
        fontSize: fontSize * 24,
        fontFamily: 'Montserrat-Bold',
        color: colors.button,
        textDecorationLine: 'underline'
    },
    button: {
        fontSize: fontSize * 16,
        fontFamily: 'Montserrat-Regular',
        color: colors.buttonText
    },
    longText: {
        fontSize: fontSize * 17,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.text,
        letterSpacing: 1
    }
})

export default Styles