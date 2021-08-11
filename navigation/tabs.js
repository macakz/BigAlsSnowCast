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
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
                    tabBarLabelStyle: { color: 'white', fontSize: 18 },
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? 'white' : 'gray';
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
                    tabBarLabelStyle: { color: 'white', fontSize: 18 },
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? 'white' : 'gray';
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
                    tabBarLabelStyle: { color: 'white', fontSize: 18 },
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? 'white' : 'gray';
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