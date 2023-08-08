import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import { View } from 'react-native';

const OTP = ({ onChildData }, ref) => {
    let otpInput = useRef(null);

    const clearText = () => {
        otpInput.clear();
    }

    const setText = () => {
        if (otpInput!==undefined && otpInput.current!==null && otpInput.state!==undefined) {
            onChildData(otpInput.state.otpText);
        }
    }
    useImperativeHandle(ref, () => ({
        clearText: () => { clearText() },
    }))
    return (
        <View>
            <OTPTextInput
                ref={e => (otpInput = e)}
                autoFocus={true}
                tintColor='blue'
                handleTextChange={setText}
            />
        </View>
    )

}

export default forwardRef(OTP)
