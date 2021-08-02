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
    container: {
        alignItems: 'center',
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
        fontSize: 16,

        backgroundColor: theme.primaryContainerColor,
        width: 300,
        alignSelf: "center"
    },
    modalContentContainer: {
        backgroundColor: theme.primaryContainerColor,
    },
    dropDownPickerLabel: {
        fontSize: 16,
        color: theme.secondaryText
    },
    searchContainer: {
        backgroundColor: theme.primaryContainerColor,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        width: 300,
    },
    searchText: {
        fontSize: 16,
        textAlign: 'center',
        color: theme.secondaryText,
    },
    imageContainer: {
        height: height * 0.7,
        width: width,
        padding: 10,
    },
    searchImage: {
        alignSelf: 'center',
        height: '100%',
        width: '100%'
    },
})