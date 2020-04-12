import React from 'react';
import { View, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { FAB } from 'react-native-paper';


const EventList = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <CountDown
                until={172800}
                size={40}
                onFinish={() => alert('Finished')}
                digitStyle={{ backgroundColor: '#FFF' }}
                digitTxtStyle={{ color: '#1CC625' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
            />

            <CountDown
                until={172800}
                size={40}
                onFinish={() => alert('Finished')}
                digitStyle={{ backgroundColor: '#FFF' }}
                digitTxtStyle={{ color: '#1CC625' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
            />

            <CountDown
                until={172800}
                size={40}
                onFinish={() => alert('Finished')}
                digitStyle={{ backgroundColor: '#FFF' }}
                digitTxtStyle={{ color: '#1CC625' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
            />
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