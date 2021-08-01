//react
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'

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
            <SafeAreaView style={styles.screen}>
                <ScrollView>
                    <Image style={styles.searchImage} source={require('../assets/images/homeImage.jpg')} />
                    <View style={styles.container}>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Mountain', { value })} style={styles.searchContainer}>
                            <Text style={styles.searchText}>Let's see what Big Al has to say...</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default SearchScreen