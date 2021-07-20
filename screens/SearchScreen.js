import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput } from 'react-native';

const SearchScreen = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    const [mountainSearch, setMountainSearch] = useState('')
    console.log(mountainSearch)
    return (
        <>
            <TextInput onChangeText={(value) => { setMountainSearch(value) }} />
        </>
    )
}

export default SearchScreen