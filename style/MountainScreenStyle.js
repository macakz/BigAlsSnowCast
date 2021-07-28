//React
import { StyleSheet } from 'react-native'

//assets
import * as theme from '../assets/theme/color'

export default StyleSheet.create({
    activityIndicatorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.primaryBackgroundColor
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
        color: theme.secondaryText
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
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderColor: theme.primaryBorderColor,
        backgroundColor: theme.primaryContainerColor
    },
    dataRowContainer: {
        flexDirection: 'row'
    },
    dataTitle: {
        fontWeight: 'bold',
        color: theme.secondaryText

    },
    dataContent: {
        color: theme.secondaryText
    },
    imageContainer: {

    },
    weatherIcon: {
        overflow: 'hidden',
        height: 100,
        width: 100
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

});