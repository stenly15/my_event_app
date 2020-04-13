import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, Button } from 'react-native-paper';


const NewEvent = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

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

    return (
        <View style={{ flex: 1, marginHorizontal: 8 }}>
            <TextInput
                label='Event Title'
                // value={this.state.text}
                // onChangeText={text => this.setState({ text })}
                style={{ marginTop: 20 }}
            />
            <View>
                <Button style={{ marginTop: 20 }} onPress={showDatepicker} mode="contained" >Pick Date</Button>
            </View>
            <View>
                <Button style={{ marginTop: 20 }} onPress={showTimepicker} mode="contained">Pick Time</Button>
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