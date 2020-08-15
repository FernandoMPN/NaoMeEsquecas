import {StyleSheet,
    Dimensions} from 'react-native'
import colors from '../../Utils/colors'

const width= Dimensions.get('window').width
const height=Dimensions.get('window').height

const Styles = StyleSheet.create({
    mainView: {
        height: height,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',        
    },
    Title: {
        color: colors.loginTitle,
        fontWeight: 'bold',
        fontSize: 24,
        margin: height/20
    },
    LoginInput: {
        width: width/1.5,
        height: 30,
        fontSize: 12,
        margin: height/30,
        padding: 0,
        borderBottomWidth: 1,
        borderBottomColor: colors.textInput,
        color: "black"

    },
    LoginButton: {
        width: width/2,
        height: width/10,
        margin: height/20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.button,
        borderRadius: 4,
        
    },
    textButton: {
        color: colors.buttonText
    },
    cadastro: {
        fontWeight: 'bold',
        color: colors.text
    }
})

export default Styles