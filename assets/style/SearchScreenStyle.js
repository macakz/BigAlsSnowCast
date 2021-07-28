//React
import { StyleSheet } from 'react-native'

//assets
import * as theme from '../theme/color'

export default StyleSheet.create({
    screen: {
        backgroundColor: theme.primaryBackgroundColor,
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    search: {
        fontSize: 20,
        borderWidth: 0,
        borderRadius: 12,
        borderColor: '#1282E9',
        backgroundColor: '#fff',
        padding: 9,
        margin: 4,
        width: 300
    },

    dropDownPicker: {
        backgroundColor: theme.primaryContainerColor,
        width: "80%",
        alignSelf: "center"
    },
    modalContentContainerStyle: {
        backgroundColor: theme.primaryContainerColor,
    },
    dropDownPickerLabel: {
        color: theme.secondaryText
    },
    button: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.primaryBorderColor,
        backgroundColor: theme.primaryContainerColor,
        padding: 9,
        margin: 20,
    },
    buttonText: {
        color: theme.secondaryText
    }
})