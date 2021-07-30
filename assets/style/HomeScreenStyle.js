//React
import { StyleSheet, Dimensions } from 'react-native'

//assets
import * as theme from '../theme/theme'

export default StyleSheet.create({
    screen: {
        backgroundColor: theme.primaryBackgroundColor,
        flex: 1,
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
    },
    homeImage: {
        alignSelf: 'center',
        height: 400,
        width: 380,
        margin: 10,
    },
})