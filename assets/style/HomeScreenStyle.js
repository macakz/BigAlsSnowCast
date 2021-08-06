//React
import { StyleSheet } from 'react-native'

//assets
import * as theme from '../theme/theme'

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
        zIndex: 1
    },

    searchText: {
        textAlign: 'center',
        color: theme.secondaryText,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    }
})