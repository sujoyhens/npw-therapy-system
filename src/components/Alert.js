import React, { useEffect } from 'react';
import { Snackbar } from 'react-native-paper';

const Alert = (props) => {
  const [visible, setVisible] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);
  return (
    <Snackbar
      visible={visible}
      elevation={4}
      wrapperStyle={{ bottom: 0 }}
      onIconPress={onDismissSnackBar}
      icon={((props.type === "success") ? 'check' : ((props.type === "error") ? 'close' : 'information'))}
      style={{margin:0, backgroundColor: ((props.type === "success") ? 'green' : ((props.type === "error") ? 'darkred' : '#023e8a')) }}
    >
      {props.message}
    </Snackbar>
  );
};


export default Alert;