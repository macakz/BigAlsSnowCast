//react
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, StatusBar } from 'react-native'

//packages
import DropDownPicker from 'react-native-dropdown-picker'

//assets
import skifields from '../assets/skifields.json'
import styles from '../assets/style/SearchScreenStyle'



const SearchScreen = ({ navigation }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const items = skifields.map(field => {
        return (
            { label: field.name + ", " + field.region, value: field.name, }
        )
    })

    return (
        <>
            <View style={styles.screen}>
                <StatusBar barStyle='dark-content' />
                <View style={styles.imageContainer}>
                    <Image resizeMode='cover' style={styles.searchImage} source={require('../assets/images/homeImage.jpg')} />
                </View>
                <View style={styles.searchContainer}>
                    <DropDownPicker
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
                    />
                    {value === null
                        ?
                        null
                        :
                        <TouchableOpacity onPress={() => navigation.navigate('Mountain', { value })} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Find that pow...</Text>
                        </TouchableOpacity>}

                </View>
            </View>
        </>
    )
}

export default SearchScreen