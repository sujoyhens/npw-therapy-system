import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import FlatLists from '../components/FlatLists';
import { StatusBar } from 'expo-status-bar';


export const Home = ({ navigation }) => {
    const DATA = [
        {
            id: 1,
            title: 'Patient Entry',
            icon: 'clipboard-plus'
        },
        {
            id: 2,
            title: 'Retrieve Patient',
            icon: 'archive-search'
        },
        {
            id: 3,
            title: 'Live Monitoring',
            icon: 'chart-bar-stacked'
        },
        {
            id: 4,
            title: 'Report',
            icon: 'book-account'
        },
        {
            id: 5,
            title: 'Help',
            icon: 'book-information-variant'
        }
    ];

    const handleMenu = (data) => {
        if (data === 1) {
            navigation.navigate('Newrecords');
        } else if (data === 2) {
            navigation.navigate('PatientDetails');
        }
        else if (data === 3) {
            navigation.navigate('LiveMonitoring');
        }
        else if (data === 4) {
            navigation.navigate('Report');
        }
        else if (data === 5) {
            navigation.navigate('HelpDesk');
        }
    }
    return (
        <SafeAreaView style={styles.maninbody}>
            <FlatLists listData={DATA} onChildData={handleMenu} />
            <StatusBar style="dark" translucent={true} hidden={false} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    maninbody: {
        padding: 10,
        flex: 1,
        flexDirection: 'column'
    },
});

