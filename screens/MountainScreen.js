import React, { useState } from 'react';
import { Button, StyleSheet, Text, } from 'react-native';
import skifields from '../data/skifields.json'

const MountainScreen = ({ route, navigation }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })

    const mountain = route.params.value
    
    const [findMountainId, setFindMountainId] = useState('hello')

    const matchMountainId = () => {
        let match = skifields.find(field => field.name === mountain);
        setFindMountainId(match.weatherId);
    }

    return (
        <>
            <Text style={styles.title}>{mountain}</Text>
            <Text>{findMountainId}</Text>
            <Button title="mountain" onPress={() => matchMountainId()} />
        </>
    )
}

export default MountainScreen