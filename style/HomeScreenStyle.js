//React
import { StyleSheet } from 'react-native'

//assets
import * as theme from '../assets/theme/color'

export default StyleSheet.create({
    screen: {
        backgroundColor: theme.primaryBackgroundColor,
        flex: 1,
    },

    search: {
        backgroundColor: 'black',
        alignSelf: 'center',
        padding: 5,
        margin: 5,
        width: 300,
    },
    searchText: {
        textAlign: 'center',
        color: 'white',
    }
})