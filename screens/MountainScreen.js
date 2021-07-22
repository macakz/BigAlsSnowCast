import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import skifields from '../data/skifields.json'
import { app_id, app_key } from '../config/weatherKeys'
import axios from 'axios'
import DropDownPicker from 'react-native-dropdown-picker';

const MountainScreen = ({ route, navigation }) => {


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        dropDownPicker: {
            width: "95%",
            alignSelf: "center",
            margin: 20
        },
        dataContainer: {
            margin: 5,
            padding: 5,
            borderWidth: 2,
            borderColor: 'black',

        }
    })

    //load mountain data

    const [mountainIsReady, setMountainIsReady] = useState(false)

    //matches the mountain id for api to the chosen mountain from previous screen, passed through params

    const mountain = route.params.value
    const [mountainId, setMountainId] = useState()
    const matchMountainId = () => {
        let match = skifields.find(field => field.name === mountain);
        setMountainId(match.weatherId);
    }

    // dropdown picker
    const [open, setOpen] = useState(false);
    const [heightValue, setHeightValue] = useState("mid");
    const items = [{ label: "base", value: "base" },
    { label: "mid", value: "mid" },
    { label: "upper", value: "upper" }]

    // determine the forecast for selected mountain by calling api
    const [mountainForecastData, setMountainForecastData] = useState([])

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

    // call on load to render the screen data

    useEffect(() => {
        mountainForecast()
    }, [mountainId])

    // screen data
    if (!mountainIsReady) {
        return (
            <>
                <Text>waiting on data</Text>
            </>
        )
    }
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <DropDownPicker
                        listMode="MODAL"
                        modalContentContainerStyle={styles.modalContentContainerStyle}
                        style={styles.dropDownPicker}
                        placeholder="Choose your mountain"
                        open={open}
                        value={heightValue}
                        items={items}
                        setOpen={setOpen}
                        setValue={setHeightValue}
                    />
                    {mountainForecastData.map((data) => {
                        return (
                            <>
                                <View style={styles.dataContainer}>
                                    <Text>{data.date}</Text>
                                    <Text>{data.time}</Text>
                                    {
                                        heightValue === "base"
                                            ?
                                            <>
                                                <Text>{data.base.freshsnow_cm}cm</Text>
                                                <Text>{data.base.temp_c}°C</Text>
                                                <Text>{data.base.winddir_compass} {data.base.windspd_kmh}km/h</Text>
                                            </>
                                            :
                                            heightValue === "mid"
                                                ?
                                                <>
                                                    <Text>{data.mid.freshsnow_cm}cm</Text>
                                                    <Text>{data.mid.temp_c}°C</Text>
                                                    <Text>{data.mid.winddir_compass} {data.mid.windspd_kmh}km/h</Text>
                                                </>
                                                :
                                                <>
                                                    <Text>{data.upper.freshsnow_cm}cm</Text>
                                                    <Text>{data.upper.temp_c}°C</Text>
                                                    <Text>{data.upper.winddir_compass} {data.upper.windspd_kmh}km/h</Text>
                                                </>
                                    }
                                    <Text>{data.rain_mm}</Text>
                                </View>
                            </>
                        )
                    })
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}


export default MountainScreen