import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

const Textinput = ({label,disabled,autoComplete,autoCorrect,inputMode,maxLength,hasErrorCode,validationText,validationRegex,onChildData }) => {
  const [text, setText] = React.useState('');
  const [errors, hasErrors] = React.useState(true);
  const validation = (newtxt) => {
    const regex = new RegExp(validationRegex);
    setText(newtxt);
    const check = regex.test(newtxt) ;
    hasErrors(check);
    if(check){
      onChildData(newtxt)
    }else{
      onChildData(null)
    }
  };
  return (
    <View style={styles.input}>
      <TextInput
        label={label}
        disabled={disabled}
        value={text}
        autoCapitalize='words'
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        inputMode={inputMode}
        maxLength={maxLength}
        mode='flat'
        error={!errors}
        onChangeText={(newtxt) => validation(newtxt)}
        contentStyle={{ backgroundColor: '#eaeaea' }}
        selectionColor='#0064fb'
        underlineColor='#a6bcff'
        style={{ elevation: 2 }}
        activeUnderlineColor='#0064fb'
        cursorColor={{ color: '#000000' }}
        right={
          (!text) ?
            <TextInput.Affix text={'/' + maxLength} textStyle={{ fontSize: 12 }} />
            :
            <TextInput.Icon icon={!errors ? "close" : "check"} color='#0064fb' />
        }
      />
      {(!errors && hasErrorCode) ?
        <HelperText type="error">
          {text ? validationText : 'Please enter the value'}
        </HelperText>
        : ""
      }
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  input: {
    marginTop: 20
  },
});