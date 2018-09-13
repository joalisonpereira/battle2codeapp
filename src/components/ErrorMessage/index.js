import React from 'react';
import { View,Text } from 'react-native';

import styles from './styles';

const ErrorMessage = ({message,active}) => (
	<View style={styles.container}>
		{active ? <Text style={styles.text}>{message}</Text> : null}
	</View>
);

export default ErrorMessage;