//react
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, StatusBar, ImageBackground } from 'react-native'

//packages
import DropDownPicker from 'react-native-dropdown-picker'
import { Picker } from '@react-native-picker/picker';

//assets
import skifields from '../assets/skifields.json'
import styles from '../assets/style/SearchScreenStyle'



const SearchScreen = ({ navigation }) => {
    const [selectedField, setSelectedField] = useState();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const items = skifields.map(field => {
        return (
            <Picker.Item label={field.name} value={field.name} />
        )

    })
    return (
        <>
            <View style={styles.screen}>
                <StatusBar barStyle='dark-content' />
                <ImageBackground source={require('../assets/images/remarkables.jpg')} resizeMode="cover" style={styles.backgroundImage} />
                <View style={styles.searchContainer}>
                    {/* <DropDownPicker
                        listMode="MODAL"
                        style={styles.dropDownPicker}
                        modalContentContainerStyle={styles.modalContentContainer}
                        labelStyle={styles.dropDownPickerLabel}
                        searchPlaceholderTextColor={styles.searchPlaceholder}
                        placeholder="Choose your mountain"
                        searchPlaceholder="Search here..."
                        searchable={true}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                    /> */}
                    <Picker
                        style={styles.dropDownPicker}
                        selectedValue={selectedField}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedField(itemValue)
                        }>
                        {items}
                    </Picker>
                    {selectedField === "Choose your mountain"
                        ?
                        null
                        :
                        <TouchableOpacity onPress={() => navigation.navigate('Mountain',  {selectedField} )} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Find that pow...</Text>
                        </TouchableOpacity>}
                </View>
            </View>
        </>
    )
}

export default SearchScreen