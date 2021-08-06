//react
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity,  } from 'react-native';

//assets
import styles from '../assets/style/HomeScreenStyle'


const HomeScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.screen}>
                <ScrollView>
                    <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('Search')}>
                        <Text style={styles.searchText}>Search for your local mountain here!</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default HomeScreen