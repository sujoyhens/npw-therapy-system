import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Table from '../components/Table';
import { apiBaseUrl } from '../constants/httpConstants';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { PrintButton } from '../components/PrintButton';

export const PatientDetails = () => {
    const [data, setData] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const searchData = async () => {
            setVisible(false);
            url = apiBaseUrl() + "/request";
            let senddata = { "R": "0" };
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
    }, []);


    return (
        <SafeAreaView>
            {
                visible ?
                    ((data && data.length > 0) ?
                        <>
                            <PrintButton
                                data={data}
                                tableHeader={['Location', 'Patient Name', 'Age', 'Gender', 'Hospital Name', 'Bed No', 'Department', 'Doctor In Charge', 'Nurse Ph no', 'Service Person']}
                                printTitle={'Patient Details'}
                                type={4}
                            />
                            <Table
                                data={data}
                                tableHeader={['Location', 'Patient Name', 'Age', 'Gender', 'Hospital Name', 'Bed No', 'Department', 'Doctor In Charge', 'Nurse Ph no', 'Service Person']}
                                type={4}
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