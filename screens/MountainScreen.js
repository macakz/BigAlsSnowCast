//react
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native'

//config
import { app_id, app_key } from '../config/weatherKeys'

//assets
import * as theme from '../assets/theme/color'
import * as weatherIcon from '../assets/icons/iconImages'
import skifields from '../assets/skifields.json'

//packages
import axios from 'axios'
import DropDownPicker from 'react-native-dropdown-picker'
import { Col, Grid } from "react-native-easy-grid"
import { Swing } from 'react-native-animated-spinkit'





const MountainScreen = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${mountain}`,
        })
    }, [navigation])
    const styles = StyleSheet.create({
        activityIndicatorContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.primaryBackgroundColor
        },
        screen: {
            backgroundColor: theme.primaryBackgroundColor,
            flex: 1
        },
        dropDownPicker: {
            backgroundColor: theme.primaryContainerColor,
        },
        modalContentContainerStyle: {
            backgroundColor: theme.primaryContainerColor,
        },
        dropDownPickerLabel: {
            color: theme.secondaryText
        },
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
        dataContainer: {
            margin: 5,
            padding: 5,
            borderWidth: 2,
            borderColor: theme.primaryBorderColor,
            backgroundColor: theme.primaryContainerColor
        },
        dataRowContainer: {
            flexDirection: 'row'
        },
        dataTitle: {
            fontWeight: 'bold',
            color: theme.secondaryText

        },
        dataContent: {
            color: theme.secondaryText
        },
        imageContainer: {

        },
        weatherIcon: {
            overflow: 'hidden',
            height: 100,
            width: 100
        },
        weatherUnlockedContainer: {

        },
        weatherUnlockedText: {
            color: theme.primaryText,
            textAlign: 'center'
        },
        weatherUnlockedImage: {
            alignItems: 'center',
        },
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

    // dropdown pickers //
    // mountain height stats
    const [heightOpen, setHeightOpen] = useState(false);
    const [heightValue, setHeightValue] = useState("Mid");
    const heightOptions = [
        { label: "Base", value: "Base" },
        { label: "Mid-Mountain", value: "Mid" },
        { label: "Upper-Mountain", value: "Upper" }
    ]
    // forecast hour interval
    const [hourOpen, setHourOpen] = useState(false)
    const [hourValue, setHourValue] = useState(12)
    const hourOptions = [
        { label: "3 hourly", value: 3 },
        { label: "6 hourly", value: 6 },
        { label: "12 hourly", value: 12 }
    ]

    // determine the forecast for selected mountain by calling api
    const [mountainForecastData, setMountainForecastData] = useState([])

    const mountainForecast = () => {
        matchMountainId()
        axios.get(`https://api.weatherunlocked.com/api/resortforecast/${mountainId}?hourly_interval=${hourValue}&app_id=${app_id}&app_key=${app_key}`)
            .then((response) => setMountainForecastData(response.data.forecast))
            // .then(
            //     console.log("confirmed data")
            // )
            .then(setTimeout(
                () => { setMountainIsReady(true) }, 3000))
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
                <View style={styles.activityIndicatorContainer}>
                    <Swing size={150} color="white" />
                </View>
            </>
        )
    }
    return (
        <>
            <SafeAreaView style={styles.screen}>
                <ScrollView>
                    <Grid>
                        <Col>
                            <View style={styles.dropDownPickerContainerLeft}>
                                <DropDownPicker
                                    listMode="MODAL"
                                    style={styles.dropDownPicker}
                                    modalContentContainerStyle={styles.modalContentContainerStyle}
                                    labelStyle={styles.dropDownPickerLabel}
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
                                    style={styles.dropDownPicker}
                                    modalContentContainerStyle={styles.modalContentContainerStyle}
                                    labelStyle={styles.dropDownPickerLabel}
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
                                        <Col size={65}>
                                            <View style={styles.dataRowContainer}>
                                                <Text style={styles.dataTitle}>Date: </Text>
                                                <Text style={styles.dataContent}>{data.date}</Text>
                                            </View>
                                            <View style={styles.dataRowContainer}>
                                                <Text style={styles.dataTitle}>Time ({hourValue} hourly intervals): </Text>
                                                <Text style={styles.dataContent}>{data.time}</Text>
                                            </View>
                                            <View style={styles.dataRowContainer}>
                                                <Text style={styles.dataTitle}>Freezing Level: </Text>
                                                <Text style={styles.dataContent}>{data.frzglvl_avg_m}m</Text>
                                            </View>
                                            {
                                                //base on mountain
                                                heightValue === "Base"
                                                    ?
                                                    <>
                                                        <View style={styles.dataRowContainer}>
                                                            <Text style={styles.dataTitle}>Snow: </Text>
                                                            <Text style={styles.dataContent}>{data.base.freshsnow_cm}cm</Text>
                                                        </View>
                                                        <View style={styles.dataRowContainer}>
                                                            <Text style={styles.dataTitle}>Temperature: </Text>
                                                            <Text style={styles.dataContent}>{data.base.temp_c}°C</Text>
                                                        </View>
                                                        <View style={styles.dataRowContainer}>
                                                            <Text style={styles.dataTitle}>Wind Direction and Speed: </Text>
                                                            <Text style={styles.dataContent}>{data.base.winddir_compass} {data.base.windspd_kmh}km/h</Text>
                                                        </View>
                                                        <View style={styles.dataRowContainer}>
                                                            <Text style={styles.dataTitle}>Forecast: </Text>
                                                            <Text style={styles.dataContent}>{data.base.wx_desc}</Text>
                                                        </View>
                                                    </>
                                                    :
                                                    //mid mountain
                                                    heightValue === "Mid"
                                                        ?
                                                        <>
                                                            <View style={styles.dataRowContainer}>
                                                                <Text style={styles.dataTitle}>Snow: </Text>
                                                                <Text style={styles.dataContent}>{data.mid.freshsnow_cm}cm</Text>
                                                            </View>
                                                            <View style={styles.dataRowContainer}>
                                                                <Text style={styles.dataTitle}>Temperature: </Text>
                                                                <Text style={styles.dataContent}>{data.base.temp_c}°C</Text>
                                                            </View>
                                                            <View style={styles.dataRowContainer}>
                                                                <Text style={styles.dataTitle}>Wind Direction and Speed: </Text>
                                                                <Text style={styles.dataContent}>{data.mid.winddir_compass} {data.mid.windspd_kmh}km/h</Text>
                                                            </View>
                                                            <View style={styles.dataRowContainer}>
                                                                <Text style={styles.dataTitle}>Forecast: </Text>
                                                                <Text style={styles.dataContent}>{data.mid.wx_desc}</Text>
                                                            </View>
                                                        </>
                                                        :
                                                        //upper mountain
                                                        <>
                                                            <View style={styles.dataRowContainer}>
                                                                <Text style={styles.dataTitle}>Snow: </Text>
                                                                <Text style={styles.dataContent}>{data.upper.freshsnow_cm}cm</Text>
                                                            </View>
                                                            <View style={styles.dataRowContainer}>
                                                                <Text style={styles.dataTitle}>Temperature: </Text>
                                                                <Text style={styles.dataContent}>{data.upper.temp_c}°C</Text>
                                                            </View>
                                                            <View style={styles.dataRowContainer}>
                                                                <Text style={styles.dataTitle}>Wind Direction and Speed: </Text>
                                                                <Text style={styles.dataContent}>{data.upper.winddir_compass} {data.upper.windspd_kmh}km/h</Text>
                                                            </View>
                                                            <View style={styles.dataRowContainer}>
                                                                <Text style={styles.dataTitle}>Forecast: </Text>
                                                                <Text style={styles.dataContent}>{data.upper.wx_desc}</Text>
                                                            </View>
                                                        </>
                                            }
                                        </Col>
                                        <Col size={20}>
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
                    <View style={styles.weatherUnlockedContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL('http://www.weatherunlocked.com/')}>
                            <Text style={styles.weatherUnlockedText} >Weather Provided by</Text>
                            <Image style={styles.weatherUnlockedImage} source={require('../assets/weatherUnlockedLogo.png')} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}


export default MountainScreen