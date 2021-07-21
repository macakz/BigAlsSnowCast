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
    const [mountainForecastData, setMountainForecastData] = useState('')
    const mountainForecast = () => {
        axios.get(`https://api.weatherunlocked.com/api/resortforecast/4424660?app_id=${app_id}&app_key=${app_key}`)
            .then(function (response) {
                console.log(response.data.forecast)
                // setMountainForecastData(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <>
            <Text style={styles.title}>{mountain}</Text>
            <Text>{mountainId}</Text>
            <Button title="mountain" onPress={() => matchMountainId()} />
            <Button title="forecast" onPress={() => mountainForecast()} />
            <Text>{mountainForecastData}</Text>

        </>
    )
}

export default MountainScreen