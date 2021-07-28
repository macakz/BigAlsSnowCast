//react
import React from 'react';
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';

//assets
import styles from '../assets/style/HomeScreenStyle'


const HomeScreen = ({ navigation }) => {
    return (

        <>
            <SafeAreaView style={styles.screen}>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.search} onPress={() => navigation.navigate('Search')}>
                            <Text style={styles.searchText}>Search for your local mountain here!</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default HomeScreen