import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const FormControl = ({children}) => (
	<View style={styles.container}>
		{children}
	</View>
);

export default FormControl;