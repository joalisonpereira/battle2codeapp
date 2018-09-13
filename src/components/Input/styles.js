import { StyleSheet } from 'react-native';
import { colors,metrics,fonts } from '../../styles';

const styles = StyleSheet.create({
	input:{
		padding: metrics.baseMargin,
		borderWidth: 1,
		borderColor: colors.input,
		borderRadius: metrics.baseRadius,
		backgroundColor: colors.input,
		fontSize: fonts.input,
		fontWeight:'bold',
		color: colors.text,
		textAlign: 'center'
	}
});

export default styles;