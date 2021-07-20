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


    const [mountainSearch, setMountainSearch] = useState('')
    const [searchList, setSearchList] = useState('')
    const search = () => {
        let searchForSkifield = skifields.find(field => field.name === mountainSearch);
        setSearchList(searchForSkifield);
    }


    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.search} onSubmitEditing={search} onChangeText={(value) => { setMountainSearch(value) }} />
                <Button onPress={search} title="let it snow" />
                {
                    searchList === ''
                        ? <Text></Text>
                        :
                        <Text>{searchList.name}, {searchList.region}</Text>

                }
            </View>

        </>
    )
}

export default SearchScreen