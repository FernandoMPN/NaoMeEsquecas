import {StyleSheet,Dimensions} from 'react-native'

const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

const Styles=StyleSheet.create({
    checkButtonView:{
        display:'flex',
        flexDirection:'row',
    },
    checkButton:{
        width:width/13,
        height:height/20,
        margin:5,
        backgroundColor:'#fff',
        borderRadius:4,
        borderColor:'#202833',
        borderWidth:2
    },
    checkedButton:{
        backgroundColor:'#202833'
    }
})

export default Styles