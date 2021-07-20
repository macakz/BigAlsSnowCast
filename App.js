import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

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
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
