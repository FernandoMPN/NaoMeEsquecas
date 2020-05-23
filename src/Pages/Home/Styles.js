import { StyleSheet, Dimensions } from 'react-native'

const width= Dimensions.get('window').width
const height=Dimensions.get('window').height

const Styles = StyleSheet.create({
    mainView:{ flex: 1,
        backgroundColor: '#fff', 
        alignItems: "center", 
        justifyContent: 'space-between'
    },
    topBar:{
        width,
        height:width/18,
        backgroundColor:'#6B398E'
    },
    image:{
        width: 282,
        height: 119,
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
        fontSize:26,
        textAlign: 'center',
        fontFamily: "Montserrat-Bold"
    },
    shapes: {
        width,
        height: 33,
        backgroundColor:'#6B398E'
    },
    aboutText: {
        color:'#6B398E',
        fontFamily: "Montserrat-Bold",
        fontSize:18
    },
})

export default Styles