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
        height: height / 1.9,
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
        padding: 10,
        alignSelf: "center"
    },

    textInput: {
        width: 250,
        height: 40,
        borderBottomColor: '#743293',
        borderBottomWidth: 1,
        paddingBottom: -10,
        marginVertical: 25
    },

    checkButton:{
        width: "80%",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },

    checkButtonPicker: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#041639",
        marginRight: 8
    },

    checkTextArea:{
        width: 142
    },

    addNewButton:{
        width: "100%",
        maxWidth: 340,
        height: 50,
        backgroundColor: "#743293",
        borderRadius: 100,
        padding: 12,
        justifyContent: "space-between",
        flexDirection: "row"
    },

    itensContainer:{
        width: "100%",
        height: height / 1.9,
        paddingVertical: 10,
        alignItems: "center",
    },

    addNewIcon:{
        width: 49,
        height: 49,
        borderRadius: 100,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#743293",
        marginTop: -12,
        marginRight: -12
    },

    hourItem:{
        width: "100%",
        maxWidth: 340,
        height: 50,
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        padding: 12,
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 5
    },

    reviewContainer:{
        width: "100%",
        height: height / 1.9,
        paddingHorizontal: 40,
        justifyContent: "space-evenly"
    },

    completeContainer:{
        width: "100%",
        height: height / 1.9,
        justifyContent: "space-evenly"
    }


})

export const TextStyle = StyleSheet.create({

    nameHeader:{
        fontSize: fontSize * 24,
        color: "#6B398E",
        fontFamily: "Montserrat-Bold"
    },

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

    radioButton:{
        fontSize: 18
    },

    date: {
        fontSize: 16
    },

    modalHeader:{
        fontSize: 18
    },

    modalHeaderBold:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#6B398E"
    },

    infoTitle:{
        fontSize: 12,
        color: "#404B5A"
    },

    infoContent:{
        fontSize: 18,
        fontWeight: "700"
    }

})

export const ModalStyle = StyleSheet.create({

    Container:{
        width,
        height,
        backgroundColor: "rgba(0,0,0, 0.5)",

        justifyContent: "center",
        alignItems: "center"
    },

    MainArea: {
        width: width / 1.2,
        height: height / 2,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 20
    },

    pickerArea: {

        width: "100%",
        height: height / 3.8,
        justifyContent: "space-evenly"

    }


})

export default Styles