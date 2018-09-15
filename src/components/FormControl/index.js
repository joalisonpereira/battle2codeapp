import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const FormControl = ({children,style}) => (
	<View style={[styles.container,style]}>
		{children}
	</View>
);

export default FormControl;