import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = Dimensions.get('window').fontScale

const Styles = StyleSheet.create({
    mainView:{ flex: 1,
        backgroundColor: '#fff', 
        alignItems: "center", 
        justifyContent: 'space-between'
    },
    image:{
        marginTop: height/70,
        width: width * 0.7,
        height: width * 0.7 * 0.71,
        backgroundColor:'#b9b9b9'
    },
    button: {
        width: '85%', 
        height: '14%',
        borderRadius: 8,
        backgroundColor: '#A371C3',
        justifyContent: 'center'
    },
    buttonText: {
        color:'#fff',
        fontSize: 26 * fontSize,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold'
    },
    shapes: {
        width,
        height: 37
    },
    aboutText: {
        color:'#6B398E',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20 * fontSize
    },
    
})

export default Styles