import React from 'react';
import { TextInput,View } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../styles';
import styles from './styles';

const Input = ({style,placeholder,value,onChangeText}) => (
    <TextInput
		style={styles.input}
		placeholder={placeholder}
		value={value}
		onChangeText={onChangeText}
		placeholderTextColor="#999"
		underlineColorAndroid="transparent"
	/>
)

export default Input;