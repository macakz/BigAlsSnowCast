import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
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
            <View style={styles.container}>
                <TouchableOpacity style={styles.search} onPress={() => navigation.navigate('Search')}>
                    <Text style={styles.searchText}>Search for your local mountain here!</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default HomeScreen