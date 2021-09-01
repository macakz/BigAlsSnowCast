//React
import React from 'react'
import 'react-native-gesture-handler'

//react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './navigation/tabs'

//Screens
import MountainScreen from './screens/MountainScreen'

//theme
import * as theme from './assets/theme/theme'

//redux
import { Provider } from 'react-redux'
import { store } from './redux/store'
const Stack = createStackNavigator()

const App = () => {

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Search'
              component={Tabs}
              // stops double overlap of header as nav component do not remove headershown here, look in nav
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mountain"
              options={{
                headerStyle: {
                  backgroundColor: theme.primaryBackgroundColor,
                },
                headerTitleStyle: {
                  color: theme.secondaryText
                },
                headerTintColor: theme.secondaryText,
              }}
              component={MountainScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App;
