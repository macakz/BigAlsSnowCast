//react
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, StatusBar, ImageBackground } from 'react-native'

//packages
import DropDownPicker from 'react-native-dropdown-picker'

//assets
import skifields from '../assets/skifields.json'
import styles from '../assets/style/SearchScreenStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = ({ navigation }) => {
    return (
        <>
            <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Text > hello world</Text>
                <Ionicons name='home' size={30} />

            </View>
        </>
    )
}

export default HomeScreen