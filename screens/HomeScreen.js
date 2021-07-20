import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Text>Hi</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Text>Search for your local mountain here!</Text>
            </TouchableOpacity>
        </>
    )
}

export default HomeScreen