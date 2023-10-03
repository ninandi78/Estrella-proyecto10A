import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      firstSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "pink",
        width: "100%",
      },
    secondSection: {
        flex: 2,
        backgroundColor: "white",
        width: "100%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 20,
        justifyContent: "space-between",
    },
    title:{
        fontSize: 48,
        color: "white",
        fontWeight: "bold",
    },
    label: {
        color: "#FFC0CB",
    },
    textInput: {
        color: "#000",
        padding: 8,
    },
    forgotPassword: {
        color: "#FFC0CB",
        textAlign: "right",
    },
    button: {
        backgroundColor: "",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    spacing: {
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    }, 
    singup: {
        color: "pink",
        paddingLeft: 5,
    }

})
