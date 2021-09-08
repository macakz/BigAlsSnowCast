//react
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, StatusBar, ImageBackground } from 'react-native'

//packages

//assets
import skifields from '../assets/skifields.json'
import styles from '../assets/style/FavouriteScreenStyle'



const FavouriteScreen = ({ navigation }) => {


    return (
        <>
            <View style={styles.screen}>
                <ImageBackground source={require('../assets/images/alps.jpg')} resizeMode="cover" style={styles.backgroundImage} />
            </View>
        </>
    )
}

export default FavouriteScreen