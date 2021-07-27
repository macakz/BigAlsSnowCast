//react
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//assets
import * as theme from '../assets/theme/color'

const HomeScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
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
    });


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