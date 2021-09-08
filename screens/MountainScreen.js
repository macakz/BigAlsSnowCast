//react
import React, { useState, useCallback, useEffect, } from 'react'
import { ImageBackground, ScrollView, Text, View, Image, Linking, TouchableOpacity, Modal } from 'react-native'

//config
import { app_id, app_key } from '../config/weatherKeys'

//assets
import * as weatherIcon from '../assets/icons/iconImages'
import skifields from '../assets/skifields.json'
import styles from '../assets/style/MountainScreenStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';
//components 
import getDayOfWeek from '../components/getDayOfWeek'

//packages
import axios from 'axios'
import { Col, Grid } from "react-native-easy-grid"
import { Swing } from 'react-native-animated-spinkit'

const MountainScreen = ({ route, navigation }) => {
    //load mountain data
    const [mountainIsReady, setMountainIsReady] = useState(false)

    //matches the mountain id for api to the chosen mountain from previous screen, passed through params
    mountain = route.params.selectedField
    const [mountainId, setMountainId] = useState()
    const matchMountainId = () => {
        const match = skifields.find(field => field.name === mountain)
        setMountainId(match.weatherId)
        websiteWeatherReport()
    }
    const [websiteReport, setWebsiteReport] = useState()
    const websiteWeatherReport = () => {
        const match = skifields.find(field => field.name === mountain)
        setWebsiteReport(match.websiteReport)
    }
    
    // forcast mountain height
    const [heightValue, setHeightValue] = useState("Mid");

    // forecast hour interval
    const [hourValue, setHourValue] = useState(12)

    // modal state for options to customise api call
    const [showOptions, setShowOptions] = useState(false)

    // determine the forecast for selected mountain by calling api
    const [mountainForecastData, setMountainForecastData] = useState([])
    const mountainForecast = useCallback(() => {
        setMountainIsReady(false)
        axios.get(`https://api.weatherunlocked.com/api/resortforecast/${mountainId}?hourly_interval=${hourValue}&app_id=${app_id}&app_key=${app_key}`)
            .then((response) => setMountainForecastData(response.data.forecast))
            .then(() => setMountainIsReady(true))
            .catch((error) => {
                console.log("Error:", error);
            })
    }, [mountainId, hourValue, heightValue])

    // call on load to render the screen data

    useEffect(() => {
        matchMountainId()
        mountainForecast()
    }, [mountainId, hourValue, heightValue])

    // screen data
    if (mountainIsReady === false) {
        return (
            <>
                <View style={styles.screen}>
                    <View style={styles.loading}>
                        <Swing size={150} color="white" />
                    </View>
                    <ImageBackground source={require('../assets/images/alps.jpg')} resizeMode="cover" style={styles.backgroundImage} />
                </View>
            </>
        )
    }
    return (
        <>
            <View style={styles.screen}>
                <ImageBackground source={require('../assets/images/alps.jpg')} resizeMode="cover" style={styles.backgroundImage} />
                <View style={styles.mountainDataOverlay}>
                    <ScrollView>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Search')}>
                                <Icon name="arrow-back-ios" size={30} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.headerButton} onPress={() => Linking.openURL(websiteReport)}>
                                <Text style={styles.headerButtonText}>{mountain}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.headerButton} onPress={() => setShowOptions(true)}>
                                <Icon name="settings" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        {mountainForecastData.map((data) => {
                            const icon = data.upper.wx_icon.replace(".gif", "")
                            return (
                                <View style={styles.dataContainer} key={data.date + data.time}>
                                    <Grid>
                                        <Col size={65}>
                                            <View style={styles.dataRowContainer}>
                                                <Text style={styles.dataTitle}>Date: </Text>
                                                <Text style={styles.dataContent}>{getDayOfWeek(data.date)} - {data.date}</Text>
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
                                                            <Text style={styles.dataContent}>{data.base.freshsnow_cm.toFixed(2)}cm</Text>
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
                                                                <Text style={styles.dataContent}>{data.mid.freshsnow_cm.toFixed(2)}cm</Text>
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
                                                                <Text style={styles.dataContent}>{data.upper.freshsnow_cm.toFixed(2)}cm</Text>
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
                            )
                        })
                        }
                        <View style={styles.weatherUnlockedContainer}>
                            <TouchableOpacity onPress={() => Linking.openURL('http://www.weatherunlocked.com/')}>
                                <Text style={styles.weatherUnlockedText} >Weather Provided by</Text>
                                <Image style={styles.weatherUnlockedImage} resizeMode={'cover'} source={require('../assets/images/weatherUnlockedLogo.png')} />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <Modal transparent={true} animationType='fade' visible={showOptions}>
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <Text style={styles.message}>Choose mountain height</Text>
                                <TouchableOpacity onPress={() => setHeightValue('Base')}>
                                    <Text style={styles.modalButton}>Base</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setHeightValue('Mid')}>
                                    <Text style={styles.modalButton}>Mid</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setHeightValue('Upper')}>
                                    <Text style={styles.modalButton}>Upper</Text>
                                </TouchableOpacity>
                                <Text style={styles.message}>Choose hourly interval</Text>
                                <TouchableOpacity onPress={() => setHourValue(6)}>
                                    <Text style={styles.modalButton}>6 Hourly</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setHourValue(12)}>
                                    <Text style={styles.modalButton}>12 Hourly</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setShowOptions(false)}>
                                    <Text style={styles.modalCloseButton}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </>
    )
}

export default MountainScreen