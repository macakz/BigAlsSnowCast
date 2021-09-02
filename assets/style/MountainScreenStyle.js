//React
import { StyleSheet, Dimensions } from 'react-native'

//assets
import * as theme from '../theme/theme'
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    loading: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    },
    screen: {
        backgroundColor: theme.primaryBackgroundColor,
        flex: 1
    },
    dropDownPicker: {
        backgroundColor: theme.primaryContainerColor,
    },
    modalContentContainerStyle: {
        backgroundColor: theme.primaryContainerColor,

    },

    dropDownPickerLabel: {
        color: theme.primaryText,
    },
    dropdownMainContainer: {

    },
    dropDownPickerContainerLeft: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 2.5
    },
    dropDownPickerContainerRight: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 2.5,
        paddingRight: 5,
    },
    dataContainer: {
        top: height * 0.1,
        margin: 10,
        padding: 10,
        backgroundColor: theme.primaryContainerColor,
        borderRadius: 10,
    },
    dataRowContainer: {
        flexDirection: 'row'
    },
    dataTitle: {
        fontWeight: 'bold',
        color: theme.primaryText,
    },
    dataContent: {
        color: theme.primaryText,
    },
    imageContainer: {

    },
    weatherIcon: {
        overflow: 'hidden',
        height: 80,
        width: 80
    },
    weatherUnlockedContainer: {

    },
    weatherUnlockedText: {
        color: theme.primaryText,
        textAlign: 'center'
    },
    weatherUnlockedImage: {
        alignItems: 'center',

    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    },
    mountainDataOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
})