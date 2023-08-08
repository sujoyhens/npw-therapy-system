
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainForm } from './src/routing/MainForm';
import { Entryscreen } from './src/routing/Entryscreen';
import { Newrecords } from './src/containers/Newrecords';
import { EventsAlarms } from './src/containers/EventsAlarms';
import { CanisterConsumption } from './src/containers/CanisterConsumption';
import { FoamConsumption } from './src/containers/FoamConsumption';
import { PatientDetails } from './src/containers/PatientDetails';
import { LiveMonitoring } from './src/containers/LiveMonitoring';
import {HelpDesk} from './src/components/HelpDesk';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Entryscreen"
          component={Entryscreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'lightgray'
            },
            headerTitle: () =>
            (
              <Image style={{ height: 30, width: 90 }} source={require('./assets/images/logo.png')} />
            ),
            headerTitleAlign: 'center',
          }} />
        <Stack.Screen
          name="MainForm"
          component={MainForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Newrecords"
          component={Newrecords}
          options={{
            headerShown: true,
            title: 'Create a new record'
          }}
        />
        <Stack.Screen
          name="EventsAlarms"
          component={EventsAlarms}
          options={{
            headerShown: true,
            title: 'Events & Alarms'
          }}
        />
        <Stack.Screen
          name="CanisterConsumption"
          component={CanisterConsumption}
          options={{
            headerShown: true,
            title: 'Canister Consumption'
          }}
        />
        <Stack.Screen
          name="FoamConsumption"
          component={FoamConsumption}
          options={{
            headerShown: true,
            title: 'Foam Consumption'
          }}
        />
        <Stack.Screen
          name="PatientDetails"
          component={PatientDetails}
          options={{
            headerShown: true,
            title: 'Patient Details'
          }}
        />
        <Stack.Screen
          name="LiveMonitoring"
          component={LiveMonitoring}
          options={{
            headerShown: true,
            title: 'Live Monitoring'
          }}
        />
        <Stack.Screen
          name="HelpDesk"
          component={HelpDesk}
          options={{
            headerShown: true,
            title: 'Help Desk'
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App



