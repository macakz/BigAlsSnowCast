import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Home />
        <Text>hello world</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
