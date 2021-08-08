import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SearchScreen from '../screens/SearchScreen'
import MountainScreen from '../screens/MountainScreen'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Search"
                component={SearchScreen}
            />
            <Tab.Screen
                name="Mountain"
                component={MountainScreen}
            />
        </Tab.Navigator>
    )
}

export default Tabs