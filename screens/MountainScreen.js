import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import skifields from '../data/skifields.json'
import { app_id, app_key } from '../config/weatherKeys'
import axios from 'axios'
import DropDownPicker from 'react-native-dropdown-picker'
import * as weatherIcon from '../data/icons/iconImages'
import { Col, Row, Grid } from "react-native-easy-grid";

const MountainScreen = ({ route, navigation }) => {
    const styles = StyleSheet.create({
        dropDownPickerContainerLeft: {
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 2.5
        },
        dropDownPickerContainerRight: {
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 2.5,
            paddingRight: 5,
        },
        dropDownPicker: {
        },
        dataContainer: {
            margin: 5,
            padding: 5,
            borderWidth: 2,
            borderColor: 'black',

        },
        imageContainer: {

        },
        weatherIcon: {
            overflow: 'hidden',
            height: 100,
            width: 100
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

    // dropdown pickers

    // mountain height stats
    const [heightOpen, setHeightOpen] = useState(false);
    const [heightValue, setHeightValue] = useState("Mid");
    const heightOptions = [
        { label: "Base", value: "Base" },
        { label: "Mid", value: "Mid" },
        { label: "Upper", value: "Upper" }
    ]
    // forecast hour interval
    const [hourOpen, setHourOpen] = useState(false)
    const [hourValue, setHourValue] = useState(12)
    const hourOptions = [
        { label: 3, value: 3 },
        { label: 6, value: 6 },
        { label: 12, value: 12 }
    ]

    // determine the forecast for selected mountain by calling api
    const [mountainForecastData, setMountainForecastData] = useState([])

    const mountainForecast = () => {
        matchMountainId()
        axios.get(`https://api.weatherunlocked.com/api/resortforecast/${mountainId}?hourly_interval=${hourValue}&app_id=${app_id}&app_key=${app_key}`)
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
    }, [mountainId, hourValue])


    // screen data
    if (!mountainIsReady) {
        return (
            <>
                <ActivityIndicator animating={true} />
            </>
        )
    }
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <Grid>
                        <Col>
                            <View style={styles.dropDownPickerContainerLeft}>
                                <DropDownPicker
                                    listMode="MODAL"
                                    modalContentContainerStyle={styles.modalContentContainerStyle}
                                    style={styles.dropDownPicker}
                                    open={heightOpen}
                                    value={heightValue}
                                    items={heightOptions}
                                    setOpen={setHeightOpen}
                                    setValue={setHeightValue}
                                />
                            </View>
                        </Col>
                        <Col>
                            <View style={styles.dropDownPickerContainerRight}>

                                <DropDownPicker
                                    listMode="MODAL"
                                    modalContentContainerStyle={styles.modalContentContainerStyle}
                                    style={styles.dropDownPicker}
                                    open={hourOpen}
                                    value={hourValue}
                                    items={hourOptions}
                                    setOpen={setHourOpen}
                                    setValue={setHourValue}
                                />
                            </View>
                        </Col>
                    </Grid>

                    {mountainForecastData.map((data) => {
                        const icon = data.upper.wx_icon.replace(".gif", "")
                        return (
                            <>
                                <View key={data.time} style={styles.dataContainer}>
                                    <Grid>
                                        <Col>
                                            <Text>{data.date}</Text>
                                            <Text>{data.time}</Text>
                                            {
                                                heightValue === "Base"
                                                    ?
                                                    <>
                                                        <Text>{data.base.freshsnow_cm}cm</Text>
                                                        <Text>{data.base.temp_c}°C</Text>
                                                        <Text>{data.base.winddir_compass} {data.base.windspd_kmh}km/h</Text>
                                                        <Text>{data.base.wx_desc}</Text>
                                                    </>
                                                    :
                                                    heightValue === "Mid"
                                                        ?
                                                        <>
                                                            <Text>{data.mid.freshsnow_cm}cm</Text>
                                                            <Text>{data.base.temp_c}°C</Text>
                                                            <Text>{data.mid.winddir_compass} {data.mid.windspd_kmh}km/h</Text>
                                                            <Text>{data.mid.wx_desc}</Text>
                                                        </>
                                                        :
                                                        <>
                                                            <Text>{data.upper.freshsnow_cm}cm</Text>
                                                            <Text>{data.upper.temp_c}°C</Text>
                                                            <Text>{data.upper.winddir_compass} {data.upper.windspd_kmh}km/h</Text>
                                                            <Text>{data.upper.wx_desc}</Text>
                                                        </>
                                            }
                                        </Col>
                                        <Col>
                                            <View style={styles.imageContainer}>
                                                <Image style={styles.weatherIcon} source={weatherIcon[icon]} />
                                            </View>
                                        </Col>
                                    </Grid>




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