import {StyleSheet,Dimensions} from 'react-native'

import colors from '../../Utils/colors'

const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

const Styles=StyleSheet.create({
    checkButtonView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        margin:4,
        justifyContent:'center'
    },
    checkButton:{
        width:width/13,
        height:height/20,
        margin:5,
        backgroundColor: colors.checkButton,
        borderRadius:20,
        borderColor: colors.checkedButton,
        borderWidth:2
    },
    checkedButton:{
        backgroundColor: colors.checkedButton
    },
    styleScrollView:{
        marginVertical:4
    },
    confirmView:{
        marginVertical:height/15
    },
    encerrarButton:{
        alignSelf:'center',
    },
    buttonView:{
        height:height/3,
        flexDirection:'column-reverse'
    }
})

export default Styles