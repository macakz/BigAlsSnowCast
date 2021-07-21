import React, { useState } from 'react';
import { Button, StyleSheet, Text, } from 'react-native';
import skifields from '../data/skifields.json'
import { app_id, app_key } from '../config/weatherKeys'
import axios from 'axios'
const MountainScreen = ({ route, navigation }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })

    const mountain = route.params.value
    const [mountainId, setMountainId] = useState('')
    const matchMountainId = () => {
        let match = skifields.find(field => field.name === mountain);
        setMountainId(match.weatherId);
    }

    const mountainForecast = async (query) => {
        let data = await axios.get(`api.weatherunlocked.com/api/resortforecast/4424660?app_id=${app_id}&app_key=${app_key}`)
    }

    return (
        <>
            <Text style={styles.title}>{mountain}</Text>
            <Text>{mountainId}</Text>
            <Button title="mountain" onPress={() => matchMountainId()} />
        </>
    )
}

export default MountainScreen