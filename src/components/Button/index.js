import React from 'react';
import {StyleSheet} from 'react-native';

import { Button as ButtonDefault } from 'react-native-elements';
import { colors,fonts,metrics } from '../../styles';

const Button = ({title,color=colors.primary,onPress,containerViewStyle=null}) => (
	<ButtonDefault
	  title={title}
	  borderRadius={metrics.baseRadius}
	  backgroundColor={color}
	  fontWeight="bold"
	  fontSize={fonts.button}
	  onPress={onPress}
	  containerViewStyle={containerViewStyle}
	/>
);

export default Button;