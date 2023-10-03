import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      Color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    firstSection: {
      flex: 1,
      backgroundColor: "white",
      width: "100%",
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      padding: 20,
      justifyContent: "space-between",
    },
    title: {
      fontSize: 38,
      color: "pink",
      fontWeight: "bold",
      marginTop: 25,
      
      
    },
    formTitle: {
      fontSize: 14,
      color: "#FFC0CB",
      marginBottom: 20,
    },
    label: {
      color: "#FFC0CB",
      
    },
    textInput: {
      color: "#000",
      padding: 8,
    },
    button: {
      backgroundColor: "pink",
      padding: 15,
      borderRadius: 30,
      alignItems: "center",
    },
    buttonImage: {
      backgroundColor: "#FFC0CB",
      padding: 15,
      borderRadius: 30,
      alignItems: "center",
      marginTop: 20,
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
    },
    spacing: {
      marginTop: 30,
    },
    row: {
      flexDirection: "row",
      justifyContent: "center",
    },
    signUp: {
      color: "pink",
      paddingLeft: 5,
    }
  })