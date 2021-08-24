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
    pickerContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    },
    pickerItem: {
        fontSize: 16,

    },
    picker: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: 300,
        alignSelf: "center",
        borderColor: theme.secondaryContainerColor,
        borderRadius: 10,
    },
    modalContentContainer: {
        backgroundColor: theme.secondaryContainerColor,
    },
    dropDownPickerLabel: {
        fontSize: 16,
        color: theme.primaryText,
    },
    buttonContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        padding: 5,
        margin: 5,
        width: 200,
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