import React from 'react';
import {StyleSheet} from 'react-native';

import { Button as ButtonDefault } from 'react-native-elements';
import { colors,fonts,metrics } from '../../styles';

const Button = ({title,onPress,color=colors.primary,containerViewStyle=null,loading=false,icon}) => (
	<ButtonDefault
	  title={title}
	  borderRadius={metrics.baseRadius}
	  backgroundColor={color}
	  fontWeight="bold"
	  fontSize={fonts.button}
	  onPress={onPress}
	  loading={loading}
	  containerViewStyle={containerViewStyle}
	  icon={icon ? {name:icon} : null}
	/>
);

export default Button;