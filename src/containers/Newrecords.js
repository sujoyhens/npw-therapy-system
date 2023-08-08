import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Textinput from '../components/Textinput'
import Radiobutton from '../components/Radiobutton'
import Alert from '../components/Alert'
import { commonAPI } from '../actions/CommonActions';
import { StatusBar } from 'expo-status-bar';

let patientDetails = {
    "L": "",
    "P": "",
    "A": "",
    "H": "",
    "B": "",
    "D": "",
    "R": "",
    "N": "",
    "S": "",
    "X": ""
};

export const Newrecords = () => {
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [btnLoading, setbtnLoading] = useState({ "loading": false, "value": "Submit" });
    const [visible, setVisible] = React.useState({ "message": "", "visible": false, "type": "info" });
    const [seed, setSeed] = useState(1);
    const reset = () => {
        setSeed(Math.random());
    }
    const checkbutton = () => {
        // console.log(patientDetails);
        let hasNullValue = false;
        for (let key in patientDetails) {
            if (patientDetails[key] === null || patientDetails[key] === "") {
                hasNullValue = true;
                break;
            }
        }
        if (hasNullValue) {
            return true;
        } else {
            return false;
        }
    }
    const handleLocation = (data) => {
        if (data) {
            patientDetails.L = data;
        } else {
            patientDetails.L = null;
        }
        setbtnDisabled(checkbutton());
    };
    const handlePatientName = (data) => {
        if (data) {
            patientDetails.P = data;
        } else {
            patientDetails.P = null;
        }
        setbtnDisabled(checkbutton());
    };
    const handleAge = (data) => {
        if (data) {
            patientDetails.A = data;
        } else {
            patientDetails.A = null;
        }
        setbtnDisabled(checkbutton());
    };
    const handleSex = (data) => {
        if (data) {
            patientDetails.X = data;
        } else {
            patientDetails.X = null;
        }
        setbtnDisabled(checkbutton());
    };
    const handleHospital = (data) => {
        if (data) {
            patientDetails.H = data;
        } else {
            patientDetails.H = null;
        }
        setbtnDisabled(checkbutton());
    };
    const handleBed = (data) => {
        if (data) {
            patientDetails.B = data;
        } else {
            patientDetails.B = null;
        }
        setbtnDisabled(checkbutton());
    };
    const handleDepartment = (data) => {
        if (data) {
            patientDetails.D = data;
        } else {
            patientDetails.D = null;
        }
        setbtnDisabled(checkbutton());
    };
    const handleDoctor = (data) => {
        if (data) {
            patientDetails.R = data;
        } else {
            patientDetails.R = null;
        }
        setbtnDisabled(checkbutton());
    };
    const handleNurse = (data) => {
        if (data) {
            patientDetails.N = data;
        } else {
            patientDetails.N = null;
        }
        setbtnDisabled(checkbutton());
    };
    const handleServicePerson = (data) => {
        if (data) {
            patientDetails.S = data;
        } else {
            patientDetails.S = null;
        }
        setbtnDisabled(checkbutton());
    };
    const SaveData = async () => {
        setbtnLoading({ "loading": true, "value": "Loading" });
        if (!checkbutton()) {
            const address = '/patientdata';
            const postdata ={
                "L":patientDetails.L.padEnd(15, " "),
                "P":patientDetails.P.padEnd(20, " "),
                "A":patientDetails.A.padEnd(3, " "),
                "X":patientDetails.X.padEnd(1, " "),
                "H":patientDetails.H.padEnd(15, " "),
                "B":patientDetails.B.padEnd(3, " "),
                "D":patientDetails.D.padEnd(5, " "),
                "R":patientDetails.R.padEnd(20, " "),
                "N":patientDetails.N.padEnd(10, " "),
                "S":patientDetails.S.padEnd(10, " "),
            };
            try {
                let getdata = await commonAPI(postdata, address);
                if (getdata !== false || getdata !== undefined) {
                    if (getdata.success !== false) {
                        if (getdata === "success") {
                            setbtnLoading({ "loading": false, "value": "Submitted" });
                            setVisible({ "message": "Saved successfully!", "visible": true, "type": "success" });
                            setTimeout(() => {
                            reset();
                            }, 2000);
                        } else {
                            setVisible({ "message": "Please try again", "visible": true, "type": "error" });
                            setbtnLoading({ "loading": false, "value": "Error" });
                        }
                    } else {
                        setVisible({ "message": "Please try again", "visible": true, "type": "error" });
                        setbtnLoading({ "loading": false, "value": "Error" });
                    }
                }
                else {
                    setVisible({ "message": "Please try again", "visible": true, "type": "error" });
                    setbtnLoading({ "loading": false, "value": "Error" });
                }
            } catch (e) {
                setVisible({ "message": "Error", "visible": true, "type": "error" });
                setbtnLoading({ "loading": false, "value": "Error" });
            }
        } else {
            setVisible({ "message": "Please fill all values", "visible": true, "type": "error" });
            setbtnLoading({ "loading": false, "value": "Error" });
        }
    };

    useEffect(() => {
        patientDetails = {
            "L": "",
            "P": "",
            "A": "",
            "H": "",
            "B": "",
            "D": "",
            "R": "",
            "N": "",
            "S": "",
            "X": ""
        };
        setbtnLoading({ "loading": false, "value": "Submit" });
        setVisible({ "message": "", "visible": false, "type": "error" });
    }, [seed]);

    return (

        <SafeAreaView >
            <ScrollView>
                <View style={styles.maninbody}>
                    <Textinput key={seed + 1}
                        label="Name of the Location"
                        hasErrorCode={true}
                        validationText='Enter proper location with letters and numbers only within 15 letters.'
                        validationRegex='[a-zA-Z0-9]{1,15}$'
                        disabled={false}
                        autoCorrect={true}
                        value={patientDetails.L}
                        inputMode='text'
                        maxLength={15}
                        onChildData={handleLocation}
                    />
                    <Textinput key={seed + 2}
                        label="Name of the Patient"
                        validationText='Enter proper name with charcters only within 20 letters.'
                        validationRegex='[a-zA-Z]{1,20}$'
                        disabled={false}
                        autoCorrect={true}
                        inputMode='text'
                        value={patientDetails.P}
                        maxLength={20}
                        onChildData={handlePatientName}
                    />
                    <Textinput key={seed + 3}
                        label="Age"
                        hasErrorCode={true}
                        validationText='Enter a valid age'
                        validationRegex='\b(0?[1-9]?[0-9]|1[01][0-9]|120)\b'
                        disabled={false}
                        inputMode='numeric'
                        maxLength={3}
                        onChildData={handleAge}
                    />
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 14, padding: 10, paddingBottom: 0 }}>Gender</Text>
                        <Radiobutton key={seed + 4} types={['Male', 'Female', 'Transgender']} onChildData={handleSex} />
                    </View>
                    <Textinput key={seed + 5}
                        label="Name of the Hospital / Newrecords Stay"
                        validationText='Enter proper name with charcters only within 15 letters.'
                        validationRegex='[a-zA-Z]{1,15}$'
                        disabled={false}
                        autoCorrect={true}
                        inputMode='text'
                        maxLength={15}
                        onChildData={handleHospital}
                    />
                    <Textinput key={seed + 6}
                        label="Bed Number"
                        disabled={false}
                        validationText='Enter valid bed number within 3 digits.'
                        validationRegex='[0-9]{1,3}$'
                        inputMode='numeric'
                        maxLength={3}
                        onChildData={handleBed}
                    />
                    <Textinput key={seed + 7}
                        label="Department"
                        disabled={false}
                        validationText='Enter proper name with charcters only within 5 letters.'
                        validationRegex='[a-zA-Z]{1,5}$'
                        autoCorrect={true}
                        inputMode='text'
                        maxLength={5}
                        onChildData={handleDepartment}
                    />
                    <Textinput key={seed + 8}
                        label="Doctor In Charge"
                        disabled={false}
                        validationText='Enter proper name with charcters only within 20 letters.'
                        validationRegex='[a-zA-Z]{1,20}$'
                        autoCorrect={true}
                        inputMode='text'
                        maxLength={20}
                        onChildData={handleDoctor}
                    />
                    <Textinput key={seed + 9}
                        label="Nurse Contact no"
                        hasErrorCode={true}
                        validationText='Enter proper phone number of 10 digits.'
                        validationRegex='[0-9]{10}$'
                        disabled={false}
                        inputMode='tel'
                        maxLength={10}
                        onChildData={handleNurse}
                    />
                    <Textinput key={seed + 10}
                        label="Service Person Contact no"
                        hasErrorCode={true}
                        validationText='Enter proper phone number of 10 digits.'
                        validationRegex='[0-9]{10}$'
                        disabled={false}
                        inputMode='tel'
                        maxLength={10}
                        onChildData={handleServicePerson}
                    />
                    <View style={styles.buttonView}>
                        <Button
                            key={seed + 11}
                            icon="cloud-upload"
                            disabled={btnDisabled}
                            uppercase={false}
                            buttonColor={'#0064fb'}
                            mode="contained"
                            loading={btnLoading.loading}
                            onPress={SaveData}
                            style={styles.button}
                        >
                            {btnLoading.value}
                        </Button>
                    </View>
                    <Alert key={seed + 12} message={visible.message} type={visible.type} visible={visible.visible} />
                </View>
            </ScrollView>
            <StatusBar style="dark" translucent={true} hidden={false} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 18,
        fontWeight: 600,
    },
    maninbody: {
        margin: 15,
        marginTop: 0,
        height: 1020,
    },

    buttonView: {
        borderRadius: 15,
        marginTop: 20,
    },
    button: {
        padding: 5
    }
})


