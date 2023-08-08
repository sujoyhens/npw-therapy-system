import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EventTable from '../components/EventTable';
import { apiBaseUrl } from '../constants/httpConstants';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { PrintButton } from '../components/PrintButton';

export const EventsAlarms = () => {
    const [data, setData] = useState(null);
    const [visible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(255);

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Handle rows per page change
    const handleRowsPerPageChange = (newRowsPerPage) => {
        setRowsPerPage(newRowsPerPage);
    };


    useEffect(() => {
        const searchData = async () => {
            setVisible(false);
            url = apiBaseUrl() + "/request";
            let senddata = { "S": currentPage.toString() };
            try {
                axios.post(url, senddata, { timeout: 60000 }).then(response => {
                    let newData = response.data;
                    if (newData || newData.length > 0) {
                        setData(newData);
                        setVisible(true);
                    } else {
                        setData(null);
                        setVisible(true);
                    }
                }).catch(error => {
                    setVisible(true);
                    setData(null);
                });

            } catch (e) {
                setVisible(true);
                setData(null);
            }
        };
        searchData();
    }, [currentPage]);


    return (
        <SafeAreaView>

            {
                visible ?
                    ((data && data.length > 0) ?
                        <>
                            <PrintButton
                                data={data}
                                tableHeader={['ID', 'Machine', 'Event', 'Date', 'Time']}
                                printTitle={'Event & Alarms'}
                                pageNo={currentPage}
                                type={0}
                            />
                            <EventTable
                                data={data}
                                tableHeader={['ID', 'Machine', 'Event', 'Date', 'Time']}
                                currentPage={currentPage}
                                rowsPerPage={rowsPerPage}
                                onPageChange={handlePageChange}
                                onRowsPerPageChange={handleRowsPerPageChange}
                            />
                        </>
                        :
                        <View style={styles.nodatafound}>
                            <MaterialCommunityIcons name="alert-octagram" size={40} color="#3655b3" style={styles.nodatafoundicon} />
                            <Text style={styles.nodatafoundtext}>No data found! Please check your connection or try again.</Text>
                        </View>)
                    :
                    (<View style={styles.nodatafound}>
                        <ActivityIndicator animating={true} color="blue" />
                        <Text style={styles.nodatafoundtext}>Loading...</Text>
                    </View>)
            }
            <StatusBar style="dark" translucent={true} hidden={false} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nodatafound: {
        margin: 20,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowOffset: 1
    },
    nodatafoundicon: {
        textAlign: 'center',
        marginBottom: 20
    },
    nodatafoundtext: {
        fontSize: 16,
        marginTop: 15,
        textAlign: 'center'
    }
})