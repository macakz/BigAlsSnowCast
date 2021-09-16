//React
import { StyleSheet, Dimensions } from 'react-native'

//assets
import * as theme from '../theme/theme'
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    headerContainer: {
        top: height * 0.06,
        alignSelf: 'center',
        flexDirection: 'row',
    },

    headerButtonText: {
        fontSize: 20,
        width: width * 0.7,
        textAlign: 'center',
    },

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
        top: height * 0.07,
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
top: 50,
paddingBottom: 50,
    },
    weatherUnlockedText: {
        color: 'white',
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
    modalButton: {
        width: 180,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        color: '#E6BE8A',
        fontSize: 16,
    },
    modalCloseButton: {
        width: 180,
        alignSelf: 'center',
        padding: 10,
        marginTop: 80,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        color: '#E6BE8A',
        fontSize: 16,
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.9)'
    },

    subContainer: {
        padding: 13,
        backgroundColor: 'transparent',
        borderRadius: 13
    },
    message: {
        fontSize: 20,
        color: '#E6BE8A',
        textAlign: 'center',
        padding: 15
    },
    subHeaderText: {
        paddingTop: 10,
        textAlign: 'center',
    },
})