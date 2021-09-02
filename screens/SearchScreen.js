//react
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StatusBar, ImageBackground } from 'react-native'

//packages
import { Picker } from '@react-native-picker/picker';

//assets
import skifields from '../assets/skifields.json'
import styles from '../assets/style/SearchScreenStyle'



const SearchScreen = ({ navigation }) => {
    const [selectedField, setSelectedField] = useState("");
    const pickerItems = skifields.map(field => {
        return (
            <Picker.Item key={field.name} label={field.name} value={field.name} />
        )
    })
    return (
        <>
            <View style={styles.screen}>
                
                <ImageBackground source={require('../assets/images/alps.jpg')} resizeMode="cover" style={styles.backgroundImage} />
                <View style={styles.pickerContainer}>
                    <Picker
                        itemStyle={styles.pickerItem}
                        style={styles.picker}
                        selectedValue={selectedField}
                        onValueChange={(itemValue,) =>
                            setSelectedField(itemValue)
                        }>
                        {pickerItems}
                    </Picker>
                    {selectedField === "Choose your mountain..." || selectedField === ""
                        ?
                        null
                        :
                        <TouchableOpacity onPress={() => navigation.navigate('Mountain', { selectedField })} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Find that pow...</Text>
                        </TouchableOpacity>}
                </View>
            </View>
        </>
    )
}

export default SearchScreen