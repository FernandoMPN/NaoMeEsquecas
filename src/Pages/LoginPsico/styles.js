import {StyleSheet,
    Dimensions} from 'react-native'

const width= Dimensions.get('window').width
const height=Dimensions.get('window').height

const Styles = StyleSheet.create({
    mainView:{
        height:height,
        backgroundColor:'#FCF8FF',
        alignItems:'center',        
    },
    topBar:{
        width:width,
        height:width/20,
        backgroundColor:'#6B398E'
    },
    Title:{
        color:'#6B398E',
        fontWeight:'bold',
        fontSize:24,
        margin:height/20
    },
    LoginInput:{
        width:width/1.5,
        height:30,
        fontSize:12,
        margin:height/30,
        padding:0,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#532375'

    },
    LoginButton:{
        width:width/2,
        height:width/10,
        margin:height/20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6B398E',
        borderRadius:4,
        
    },
    textButton:{
        color:'#fff'
    },
    cadastro:{
        fontWeight:'bold'
    }
})

export default Styles