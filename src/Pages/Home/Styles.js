import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../Utils/colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = Dimensions.get('window').fontScale

const Styles = StyleSheet.create({
    mainView:{ 
        flex: 1,
        backgroundColor: colors.backgroundColor, 
        alignItems: "center", 
        justifyContent: 'space-between'
    },
    image:{
        marginTop: height/70,
        width: width * 0.7,
        height: width * 0.7 * 0.71
    },
    button: {
        width: '85%', 
        height: '14%',
        borderRadius: 8,
        backgroundColor: colors.homeButton,
        justifyContent: 'center'
    },
    buttonText: {
        color:colors.homeButtonText,
        fontSize: 26 * fontSize,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold'
    },
    shapes: {
        width,
        height: width * 0.1 
    },
    about: {
        width: '100%', 
        height: '100%', 
        backgroundColor: colors.backgroundColor, 
        justifyContent: 'center'
    },
    aboutText: {
        color: colors.aboutText,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20 * fontSize
    },
    backButton: {
        width: width/1.5,
        height: height/18,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',    
        backgroundColor: colors.button,
        borderRadius: 6,
        marginVertical: height/20
    },
    backButtonText: {
        fontSize: fontSize * 16,
        fontFamily: 'Montserrat-Regular',
        color: colors.buttonText 
    }
})

export default Styles