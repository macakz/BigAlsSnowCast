import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import skifields from '../data/skifields.json'
const SearchScreen = ({ route, navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 50,
        },
        search: {
            fontSize: 20,
            borderWidth: 0,
            borderRadius: 12,
            borderColor: '#1282E9',
            backgroundColor: '#fff',
            padding: 9,
            margin: 4,
            width: 300
        }
    });

    const searchForSkifield = () => {
        
    }

    const [mountainSearch, setMountainSearch] = useState('')
    const search = () => {
        console.log(mountainSearch)
    }
    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.search} onSubmitEditing={search} onChangeText={(value) => { setMountainSearch(value) }} />
                <Button onPress={search} title="let it snow" />
                {
                    skifields.map(field => {
                        field.name
                    })
                    mountainSearch = 
                        ? <Text>Coronet Peak</Text>
                        : null

                }
            </View>

        </>
    )
}

export default SearchScreen