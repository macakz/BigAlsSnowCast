//React
import React from 'react'
import 'react-native-gesture-handler'

//react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './navigation/tabs'

//Screens
import SearchScreen from './screens/SearchScreen'
import MountainScreen from './screens/MountainScreen'

//theme
import * as theme from './assets/theme/theme'

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Search'
          component={Tabs}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Mountain"
          options={{
            headerStyle: {
              backgroundColor: theme.primaryBackgroundColor,
            },
            headerTitleStyle: {
              color: theme.primaryText
            },
            headerTintColor: theme.primaryText,
          }}
          component={MountainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
