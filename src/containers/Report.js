import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FlatLists from '../components/FlatLists';

export const Report = ({ navigation }) => {
    const DATA = [
        {
            id: 10,
            title: 'Events & Alarms',
            icon: 'bell-alert'
        },
        {
            id: 11,
            title: 'Canister Consumption',
            icon: 'beaker-alert'
        },
        {
            id: 12,
            title: 'Foam Consumption',
            icon: 'cloud-print'
        }
    ];
    const handleMenu = (data) => {
        if (data === 10) {
            navigation.navigate('EventsAlarms');
        } 
        else if (data === 11) {
            navigation.navigate('CanisterConsumption');
        }
        else if (data === 12) {
            navigation.navigate('FoamConsumption');
        }
    }
    return (
        <SafeAreaView style={styles.maninbody}>
            <FlatLists listData={DATA} onChildData={handleMenu} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    maninbody: {
        padding: 10,
        flex: 1,
        flexDirection: 'column'
    },
})