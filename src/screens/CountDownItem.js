import React from 'react';
import { View, Text } from 'react-native';
import CountDown from 'react-native-countdown-component';


const CountDownItem = (props) => {
    return (
        <View style={{ flex: 1, margin: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20 }}>{props.date}</Text>
                <Text style={{ fontSize: 20 }}>{props.title}</Text>
            </View>
            <CountDown
                until={172800}
                size={40}
                onFinish={() => alert('Finished')}
                digitStyle={{ backgroundColor: '#FFF' }}
                digitTxtStyle={{ color: '#9400D3' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
            />
        </View>
    )
}

export default CountDownItem;