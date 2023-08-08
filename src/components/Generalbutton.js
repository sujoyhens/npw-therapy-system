import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Generalbutton = (props) => (
  <View style={styles.container}>
    <Button icon="cloud-upload" uppercase={false} disabled={props.disabled} buttonColor={'#0064fb'} mode="contained" style={styles.button} onPress={() => console.log('Pressed')}>
      Submit
    </Button>
  </View>
);
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20
  },
  button: {
    elevated: 2,
  }
});
export default Generalbutton;