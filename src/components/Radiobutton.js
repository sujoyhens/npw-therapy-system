import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Radiobutton = ({types,onChildData}) => {
    const [value, setValue] = React.useState(0);
    const validation = (text) => {
        setValue(text);
        onChildData(text)
    };

    return (
        <RadioButton.Group onValueChange={value => validation(value)} value={value}>
            {types.map((item, index) => (
                <RadioButton.Item key={index} label={item} value={item.charAt(0)} mode='android'  style={styles.radio} />
            ))}
        </RadioButton.Group>
    );
};

const styles = StyleSheet.create({
    radio: {
        // backgroundColor: '#eaeaea',
        // elevation: 1,
        borderRadius: 20,
        width: 160,
        flexDirection: 'row-reverse',
        margin: 4,
        // marginLeft:10,
        // marginRight:10,
    }
});
export default Radiobutton;