import {StyleSheet, Dimensions} from 'react-native'
import colors from '../../Utils/colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = 1

const Styles = StyleSheet.create({

    MainArea: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.backgroundColor,
        alignItems: "center"
    },

    header: {
        width: "80%",
        height: 40,
        backgroundColor: colors.statusBar,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25
    },

    itemsArea:{

        width: "100%",
        height: (height/1.9) - 65,
        alignItems: "center"

    },

    item: {
        width: 160,
        height: 40,
        borderRadius: 5,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        marginVertical: 10,
        alignSelf: "center"
    },

    itemSelectorIndicator:{
        width: 22,
        height: 22,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.statusBar
    }


})

export const TextStyle = StyleSheet.create({

    nameHeader:{
        fontSize: fontSize * 24,
        color: colors.registerTitle,
        fontFamily: 'Montserrat-Bold'
    },

    header: {
        fontSize: fontSize * 24,
        color: colors.registerTitle,
        marginBottom: height / 20,
        fontFamily: 'Montserrat-Bold'
    },

    info: {
        fontSize: fontSize * 18,
        fontFamily: 'Montserrat-Regular',
        color: colors.text
    },

    infoBold: {
        fontSize: fontSize * 18,
        fontFamily: 'Montserrat-Bold',
        color: colors.text
    },

    textMargin: {
        marginTop: 15
    },

    buttonText: {
        fontSize: 16
    },

    buttonTextBold: {
        fontSize: 18,
        color: colors.buttonText,
        fontWeight: 'bold'
    },

    buttonTextSemiBold: {
        fontSize: 18,
        color: colors.buttonText,
        fontWeight: '600',
        textAlign: 'center'
    },

    radioButton:{
        fontSize: 18,
        color: colors.text
    },

    date: {
        fontSize: 16,
        color: colors.text
    },

    modalHeader:{
        fontSize: 18,
        color: colors.text
    },

    modalHeaderBold:{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.registerTitle
    },

    infoTitle:{
        fontSize: 12,
        color: '#404B5A'
    },

    infoContent:{
        fontSize: 18,
        fontWeight: '700',
        color: colors.text
    }

})

export default Styles