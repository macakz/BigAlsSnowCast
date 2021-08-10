import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import SearchScreen from '../screens/SearchScreen'
import MountainScreen from '../screens/MountainScreen'
import HomeScreen from '../screens/HomeScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';

//theme
import * as theme from '../assets/theme/theme'
import { color } from 'react-native-reanimated'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                activeTintColor: 'red',
                tabBarStyle: {
                    backgroundColor: '#AED0E690',
                    position: 'absolute',
                    bottom: 20,
                    marginHorizontal: 20,
                    height: 80,
                    borderRadius: 10,
                }

            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
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
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={FavouriteScreen}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator >
    )
}

export default Tabs