//react
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, ImageBackground } from 'react-native';

//assets
import styles from '../assets/style/HomeScreenStyle'


const HomeScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.screen}>
                    <ImageBackground source={require('../assets/images/homeImage.jpg')} resizeMode="cover" style={styles.backgroundImage} />
                    <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('Search')}>
                        <Text style={styles.searchText}>Search for your local mountain here!</Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default HomeScreen