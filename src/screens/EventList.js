import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import CountDown from './CountDownItem';


const EventList = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <CountDown />
            <CountDown />
            <CountDown />
            <FAB
                style={styles.fab}
                large
                icon="plus"
                onPress={() => navigation.navigate('NewEvent')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default EventList;