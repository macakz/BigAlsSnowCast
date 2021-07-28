//react
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text,  TouchableOpacity } from 'react-native'

//packages
import DropDownPicker from 'react-native-dropdown-picker'

//assets
import skifields from '../assets/skifields.json'
import styles from '../style/SearchScreenStyle'


const SearchScreen = ({ navigation }) => {
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
                        style={styles.dropDownPicker}
                        modalContentContainerStyle={styles.modalContentContainerStyle}
                        labelStyle={styles.dropDownPickerLabel}
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