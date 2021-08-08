//React
import React from 'react'
import 'react-native-gesture-handler'
import 'react-native-gesture-handler'

//react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Screens
import SearchScreen from './screens/SearchScreen'
import MountainScreen from './screens/MountainScreen'

//theme
import * as theme from './assets/theme/theme'

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.primaryBackgroundColor,
          },
          headerTitleStyle: {
            color: theme.primaryText
          },
          headerTintColor: theme.primaryText,
        }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Mountain"
          component={MountainScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
