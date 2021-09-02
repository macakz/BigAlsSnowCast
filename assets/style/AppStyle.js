//React
import { StyleSheet, Dimensions } from 'react-native'

//assets
import * as theme from '../theme/theme'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    headerButtonCentreContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: theme.secondaryContainerColor,
        borderRadius: 10,

    },
    headerButtonLeftContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 15,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: theme.secondaryContainerColor,
        borderRadius: 10,

    },
    headerButtonRightContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 5,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: theme.secondaryContainerColor,
        borderRadius: 10,


    },
    headerButton: {

    },
    headerButtonCentreText: {
        fontSize: 20,
    },
    headerButtonText: {
        fontSize: 12,
    },
})