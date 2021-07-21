import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import skifields from '../data/skifields.json'
import DropDownPicker from 'react-native-dropdown-picker';

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
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const items = skifields.map(field => {
        return (
            { label: field.name, value: field.name }
        )
    });


    return (
        <>
            <View style={styles.container}>
                <DropDownPicker
                    placeholder="Choose your mountain"
                    searchPlaceholder="Search here..."
                    searchable={true}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                />
            </View>

        </>
    )
}

export default SearchScreen