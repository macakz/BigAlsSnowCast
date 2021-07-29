//React
import { StyleSheet } from 'react-native'

//assets
import * as theme from '../theme/theme'

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
    modalContentContainer: {
        backgroundColor: theme.primaryContainerColor,
    },
    dropDownPickerLabel: {
        color: theme.secondaryText
    },
    searchContainer: {
        backgroundColor: theme.primaryContainerColor,
        borderRadius: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        width: 300,

    },
    searchText: {
        textAlign: 'center',
        color: theme.secondaryText,
    }
})