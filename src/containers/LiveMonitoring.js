import React, { useEffect } from 'react'
import {
    View,
    ScrollView,
    Text,
    SafeAreaView,
    RefreshControl,
    StyleSheet
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { apiBaseUrl } from '../constants/httpConstants';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const Item = (props) => (
    <View>
        <View style={styles.item}>
            <Text style={styles.title}>Pressure in mmofHg</Text>
            <Text style={styles.data}>{props.item.V}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.title}>Set point in mmofHg</Text>
            <Text style={styles.data}>{props.item.S}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.title}>Process Alarm</Text>
            <Text style={styles.data}>{props.item.P}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.title}>System Alarm</Text>
            <Text style={styles.data}>{props.item.M}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.title}>Date</Text>
            <Text style={styles.data}>{props.item.D}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.title}>Time</Text>
            <Text style={styles.data}>{props.item.T}</Text>
        </View>
    </View>
);


export const LiveMonitoring = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const [refresh, setRefresh] = React.useState(0);

    const onRefresh = React.useCallback(() => {
        setRefresh(Math.random());
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const searchData = async () => {
            setVisible(false);
            url = apiBaseUrl() + "/request";
            let senddata = { "O": "0" };
            try {
                axios.post(url, senddata, { timeout: 60000 }).then(response => {
                    let newData = response.data[0];
                    if (newData || newData.length > 0) {
                        setData(newData[0]);
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
    }, [refresh]);

    return (
        <SafeAreaView style={styles.container}>
            {visible ? (
                (data) ?
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    >
                        <Item item={data}/>
                    </ScrollView>
                    :
                    <View style={styles.nodatafound}>
                        <MaterialCommunityIcons name="alert-octagram" size={40} color="#3655b3" style={styles.nodatafoundicon} />
                        <Text style={styles.nodatafoundtext}>No data found! Please check your connection or try again.</Text>
                    </View>
            ) :
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
    container: {
        flex: 1,
        marginTop:10
    },
    item: {
        borderRadius: 20,
        marginLeft:30,
        marginRight:30,
        marginBottom: 20,
        backgroundColor: '#9DB2BF',
        borderWidth: 1,
        borderColor: 'whitesmoke',
        overflow: 'hidden'
    },
    title: {
        fontSize: 14,
        padding: 5,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#27374D'
    },
    data: {
        fontSize: 20,
        textAlign: 'center',
        color: '#27374D',
        padding: 12,
        fontWeight: 'bold',
    },
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