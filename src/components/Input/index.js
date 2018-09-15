import React from 'react';
import { TextInput,View } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../styles';
import styles from './styles';

const Input = ({style,placeholder,value,onChangeText,errorStyle}) => (
    <TextInput
		style={[styles.input, errorStyle ? styles.error : null ]}
		placeholder={placeholder}
		value={value}
		onChangeText={onChangeText}
		placeholderTextColor="#999"
		underlineColorAndroid="transparent"
	/>
)

export default Input;