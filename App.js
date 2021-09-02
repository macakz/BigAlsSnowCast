//React
import React from 'react'
import 'react-native-gesture-handler'
import { StatusBar, View, Text, TouchableOpacity } from 'react-native'

//react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './navigation/tabs'

//Screens
import MountainScreen from './screens/MountainScreen'

//theme
import * as theme from './assets/theme/theme'
import styles from './assets/style/AppStyle'

//redux
import { Provider } from 'react-redux'
import { store } from './redux/store'
const Stack = createStackNavigator()

const App = () => {

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle='dark-content' />
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
              options={({ navigation }) => ({
                headerTransparent: true,
                headerTitle: ()=> (
                  <View style={styles.headerButtonCentreContainer}>
                    <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Search')}>
                      <Text style={styles.headerButtonCentreText}>Coronet Peak</Text>
                    </TouchableOpacity>
                  </View>
                ),
                headerLeft: () => (
                  <View style={styles.headerButtonLeftContainer}>
                    <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Search')}>
                      <Text style={styles.headerButtonText}> - Search</Text>
                    </TouchableOpacity>
                  </View>
                ),
                headerRight: () => (
                  <View style={styles.headerButtonRightContainer}>
                    <TouchableOpacity style={styles.headerButton}>
                      <Text style={styles.headerButtonText}>Options</Text>
                    </TouchableOpacity>
                  </View>
                ),
              })}

              component={MountainScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App;
