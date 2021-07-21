import React, { useState } from 'react';
import { StyleSheet, Text, } from 'react-native';

const MountainScreen = ({ route, navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    const data = route.params;

    return (
        <>
            <Text>{data.value}</Text>
        </>
    )
}

export default MountainScreen