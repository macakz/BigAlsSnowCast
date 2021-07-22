import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, } from 'react-native';
import skifields from '../data/skifields.json'
import { app_id, app_key } from '../config/weatherKeys'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native';

const MountainScreen = ({ route, navigation }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })

    const mountain = route.params.value
    const [mountainId, setMountainId] = useState()
    const matchMountainId = () => {
        let match = skifields.find(field => field.name === mountain);
        setMountainId(match.weatherId);
    }
    const [mountainForecastData, setMountainForecastData] = useState([])
    const [mountainIsReady, setMountainIsReady] = useState(false)

    useEffect(() => {
        mountainForecast()
    }, [mountainId]);

    const mountainForecast = () => {
        matchMountainId()
        axios.get(`https://api.weatherunlocked.com/api/resortforecast/${mountainId}?app_id=${app_id}&app_key=${app_key}`)
            .then((response) => setMountainForecastData(response.data.forecast))
            .then(
                console.log("confirmed data")
            )
            .finally(() => setMountainIsReady(true))
            .catch((error) => {
                console.log("Error:", error);
            })
    }
    if (!mountainIsReady) {
        return (
            <>
                <Text>waiting on data</Text>
            </>
        )
    }
    return (
        <>
            <Text>hi</Text>
            <Text>{mountainForecastData[0].snow_mm}</Text>
        </>
    )
}


export default MountainScreen