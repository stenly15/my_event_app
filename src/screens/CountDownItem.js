import React from 'react';
import { View, Text } from 'react-native';
import CountDown from 'react-native-countdown-component';


const CountDownItem = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20 }}>13 April 2020</Text>
                <Text style={{ fontSize: 20 }}>Demo Event Kamu</Text>
            </View>
            <CountDown
                until={172800}
                size={40}
                onFinish={() => alert('Finished')}
                digitStyle={{ backgroundColor: '#FFF' }}
                digitTxtStyle={{ color: '#1CC625' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
            />
        </View >
    )
}

export default CountDownItem;