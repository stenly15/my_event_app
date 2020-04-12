import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import CountDown from './CountDownItem';
import { useSelector } from 'react-redux';


const EventList = ({ navigation }) => {

    const events = useSelector(state => state.events.allEvents);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                events.map(event => <CountDown
                    key={event.eventId}
                    date={event.eventDate}
                    title={event.eventTitle} />)
            }

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