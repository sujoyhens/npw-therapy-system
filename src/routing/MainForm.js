import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Home } from '../containers/Home';
import { Report } from '../containers/Report';

const Tab = createBottomTabNavigator();
export const MainForm = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: 'white',
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 62,
            paddingBottom: 10,
            backgroundColor: 'blue'
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTitle: () =>
            (
              <View style={{ flex: 2, marginTop: 8, flexDirection: 'column', alignItems: 'center' }}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                {/* <Text style={{ fontSize: 8 }}>{(netInfo.details.ipAddress)}</Text> */}
              </View>
            ),
            headerRight: () => (
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.logo} source={require('../../assets/images/dd_logo.png')} />
              </View>
            ),
            tabBarLabel: 'Home',
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: 'lightgray',
            },
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Report"
          component={Report}
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="notes-medical" size={30} color={color} />
            ),
            headerShown: true,
            headerRight: () => (
              <View style={{ flex: 2, marginTop: 8, flexDirection: 'column', alignItems: 'center' }}>
                <Image style={styles.logo} source={require('../../assets/images/dd_logo.png')} />
              </View>
            ),
            headerStyle: {
              backgroundColor: 'lightgray',
            },
          }}
        />
      </Tab.Navigator>
    </>

  );
}


const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
});