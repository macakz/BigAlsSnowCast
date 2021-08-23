//React
import { StyleSheet, Dimensions } from 'react-native'

//assets
import * as theme from '../theme/theme'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    screen: {
        backgroundColor: theme.primaryBackgroundColor,
        flex: 1,
    },
    searchContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        zIndex: 1,
    },

    dropDownPicker: {
        fontSize: 16,
        backgroundColor: theme.secondaryContainerColor,
        width: 300,
        alignSelf: "center",
        borderColor: theme.secondaryContainerColor
    },
    modalContentContainer: {
        backgroundColor: theme.secondaryContainerColor,
    },
    dropDownPickerLabel: {
        fontSize: 16,
        color: theme.primaryText,
    },
    buttonContainer: {
        backgroundColor: theme.secondaryContainerColor,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        width: 300,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: theme.primaryText,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    }
})