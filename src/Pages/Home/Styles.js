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
    aboutText: {
        color: colors.aboutText,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20 * fontSize
    },
    
})

export default Styles