import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import SearchScreen from '../screens/SearchScreen'
import MountainScreen from '../screens/MountainScreen'
import HomeScreen from '../screens/HomeScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';

//style
import styles from '../assets/style/tabsStyle'
import * as theme from '../assets/theme/theme'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    position: 'absolute',
                    bottom: 20,
                    marginHorizontal: 20,
                    height: 100,
                    borderRadius: 10,
                }
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? theme.primaryFocusedIcon : theme.primaryUnfocusedIcon;
                        return (
                            <Ionicons name='home' color={color} size={30} />
                        )
                    },
                }}
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Search',
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? theme.primaryFocusedIcon : theme.primaryUnfocusedIcon;
                        return (
                            <Ionicons name='search' color={color} size={30} />
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={FavouriteScreen}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? theme.primaryFocusedIcon : theme.primaryUnfocusedIcon;
                        return (
                            <Ionicons name='star' color={color} size={30} />
                        )
                    },
                }}
            />
        </Tab.Navigator >
    )
}

export default Tabs