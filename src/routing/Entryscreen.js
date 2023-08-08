import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import OTP from '../components/OTP';
import { StatusBar } from 'expo-status-bar';




export const Entryscreen = ({ navigation }) => {

  const [isValid, setIsValid] = React.useState(false);
  const [pass, setPass] = React.useState(null);
  const [matched, setMatched] = React.useState(false);

  const childRef = useRef()

  const handlePassword = (data) => {
    const isAnyElementBlank = data.some((element) => {
      return !element;
    });
    if (!isAnyElementBlank) {
      let inputdata = data.join('');
      setPass(inputdata);
      setIsValid(true);
    } else {
      setPass(null);
      setIsValid(false);
    }
  };
  const checkPass = () => {
    if (pass) {
      if (pass.toString() === "1234") {
        setMatched(false);
        childRef.current.clearText();
        navigation.navigate('MainForm', { screen: 'Home' });
      } else {
        setMatched(true);
        childRef.current.clearText();
      }
    }
  }

  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.mainbody}>
          <Text style={styles.text}>Enter the password</Text>
          <OTP
            onChildData={handlePassword}
            ref={childRef}
          />
          {matched ?
            <Text style={{ textAlign: 'center', marginTop: 25, color: 'red' }}>Wrong password</Text>
            :
            <></>
          }
          <View style={styles.iconbtncontainer}>
            <IconButton
              style={styles.iconbtn}
              icon="arrow-right"
              mode="contained"
              loading={true}
              iconColor='white'
              size={40}
              containerColor='#0064fb'
              disabled={isValid ? false : true}
              animated={true}
              onPress={checkPass}
            />
          </View>
        </View>
      </ScrollView>
      
      <StatusBar style="dark"  translucent={true} hidden={false} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  mainbody: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10
  },
  iconbtncontainer: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconbtn: {
    marginTop: 50,
    height: 70,
    width: 70,
    borderRadius: 100
  }
})