import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container_enter_screens: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a77ce8",
    },
    textInput: {
        borderColor: "black",
        width: 260,
        padding: 5,
        paddingRight: 10,
        fontSize: 15,
        borderWidth: 2,
        marginBottom: 4,
        textAlign: "right",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: "#fffffa",
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#a77ce8",
    },
    ////////////////////////////////////////////////
    landing_imageArea: {
        margin: 25,
    },
    landing_title_text: {
        color: "#fdc123",
        fontSize: 50,
        fontWeight: "bold",
        margin: -5,
    },
    landing_reg_button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        marginTop: 2,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 3,
        borderRadius: 7,
        elevation: 2,
        backgroundColor: "#000000",
    },
    landing_reg_btn_text: {
        color: "#fdc123",
        fontSize: 15,
        fontWeight: "bold",
    },
    landing_log_button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        marginTop: 15,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 3,
        borderRadius: 7,
        elevation: 2,
        backgroundColor: "#fdc123",
    },
    landing_log_btn_text: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "bold",
    },
    ////////////////////////////////////////////////
    enter_button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#fdc123",
    },
    enter_btn_text: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
    },
    logo: {
        width: 100,
        height: 100,
        bottom: 50,
        borderRadius: 100,
        overflow: "hidden",
    },
    logo_image_area: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    already_have: {
        fontSize: 15,
        fontFamily: "sans-serif",
        color: "black",
        fontWeight: "bold",
        paddingTop: 20,
    },
    blue_btn: {
        paddingTop: 20,
        marginBottom: 4,
        fontSize: 15,
        fontFamily: "sans-serif",
        color: "blue",
        fontWeight: "bold",
        textDecorationLine: 'underline'
    },
    forgot_title: {
        top: 1,
        marginBottom: 30,
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "sans-serif",
    },
    ////////////////////////////////////////////////
    fill_title_text: {
        color: "#fdc123",
        fontSize: 30,
        fontWeight: "bold",
    },
    datePicker: {
        flexDirection: "row",
        alignContent: "space-between",
    },
    picker: {
        flex: 1,
        
    },
});