//react
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//packages
import DropDownPicker from 'react-native-dropdown-picker'

//assets
import * as theme from '../assets/theme/color'
import skifields from '../assets/skifields.json'

const SearchScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        screen: {
            backgroundColor: theme.primaryBackgroundColor,
            flex: 1,
        },
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
        },
        dropDownPicker: {
            width: "80%",
            alignSelf: "center"
        },
        modalContentContainerStyle: {

        },
        button: {
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#1282E9',
            backgroundColor: '#3C97EA',
            padding: 9,
            margin: 20,
        },
        buttonText: {
            color: 'white'
        }
    });
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const items = skifields.map(field => {
        return (
            { label: field.name + ", " + field.region, value: field.name }
        )
    });

    return (
        <>
            <SafeAreaView style={styles.screen}>
                <ScrollView>
                    <DropDownPicker
                        listMode="MODAL"
                        modalContentContainerStyle={styles.modalContentContainerStyle}
                        style={styles.dropDownPicker}
                        placeholder="Choose your mountain"
                        searchPlaceholder="Search here..."
                        searchable={true}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Mountain', { value })} style={styles.button}>
                        <Text style={styles.buttonText}>Let's see what Big Al has to say...</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default SearchScreen