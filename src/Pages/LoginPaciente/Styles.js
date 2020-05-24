import {StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const fontSize = Dimensions.get('window').fontScale

const Styles = StyleSheet.create({

    MainContainer:{

        width,
        height,
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: "#FCF8FF"

    },

    ButtonsArea: {
        width: "100%",
        height: height / 1.8,
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    largeButton: {
        width: 240,
        height: 65,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#743293",
        borderRadius: 6,
        padding: 10
    },

    button:{
        width: 200,
        height: 42,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#743293",
        borderRadius: 6,
        padding: 10
    },

    textInput: {
        width: 250,
        height: 40,
        borderBottomColor: '#743293',
        borderBottomWidth: 1,
        paddingBottom: -10,
        marginVertical: 25
    },


})

export const TextStyle = StyleSheet.create({

    header: {
        fontSize: fontSize * 24,
        color: "#6B398E",
        marginBottom: height / 20,
        fontFamily: "Montserrat-Bold"

    },

    info: {
        fontSize: fontSize * 18,
        fontFamily: "Montserrat-Regular"
    },

    infoBold: {
        fontSize: fontSize * 18,
        fontFamily: "Montserrat-Bold"
    },

    textMargin: {
        marginTop: 15
    },

    buttonText: {
        fontSize: 18,
        color: "#FFFFFF",
    },

    buttonTextBold: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "bold"
    },

    buttonTextSemiBold: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "600",
        textAlign: "center"
    },

})

export default Styles