import React, { useState } from 'react';
import { View, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, Button } from 'react-native-paper';

import * as eventActions from '../../store/actions/events';
import { useDispatch } from 'react-redux';

import moment from 'moment';


const NewEvent = ({ navigation }) => {
    const dispatch = useDispatch();

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [eventTitle, setEventTitle] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log(currentDate)
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const month_name = dt => {
        const mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return mlist[dt.getMonth()];
    };

    const getSeconds = (date, currentDate) => {

        // Convert both dates to milliseconds
        var date1_ms = date.getTime();
        var date2_ms = currentDate.getTime();

        // Calculate the difference in milliseconds
        var difference_ms = date1_ms - date2_ms;

        // Convert back to days and return
        return Math.round(difference_ms / 1000);
    }

    const onSubmit = () => {
        dispatch(eventActions.addNewEvent({
            eventId: moment().format(),
            eventTitle,
            eventDate: moment(date).format('MMMM Do YYYY'),
            eventCountDown: getSeconds(date, new Date())
        }));
        setEventTitle('');
        navigation.push('EventList');
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 8 }}>
            <TextInput
                label='Event Title'
                value={eventTitle}
                onChangeText={text => setEventTitle(text)}
                style={{ marginTop: 20 }}
            />
            <TextInput
                label='Date and Time'
                value={`${date.getHours()}:${date.getMinutes()} on ${date.getDate()} ${month_name(date)} ${date.getFullYear()}`}
                style={{ marginTop: 20 }}
                disabled
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button style={{ marginTop: 5 }} onPress={showDatepicker} >Pick Date</Button>
                <Button style={{ marginTop: 5 }} onPress={showTimepicker}>Pick Time</Button>
            </View>
            <View>
                <Button
                    style={{ marginTop: 20 }}
                    onPress={onSubmit}

                    mode="contained">Submit</Button>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default NewEvent;