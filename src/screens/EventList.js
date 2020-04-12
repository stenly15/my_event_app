import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import CountDown from './CountDownItem';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

renderEvent = () => {
    <View>
        <Text>List Item</Text>
    </View>
}

const EventList = ({ navigation }) => {

    const events = useSelector(state => state.events.allEvents);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={events}
                renderItem={({ item }) => (
                    <CountDown key={item.eventId}
                        date={item.eventDate}
                        title={item.eventTitle} />
                )}
                keyExtractor={(item) => item.eventId.toString()}
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