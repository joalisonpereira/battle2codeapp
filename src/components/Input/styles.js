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
		textAlign: 'center',
		color: colors.secundary,
		elevation:2
	},
	error:{
		borderColor:'#EA3C53',
		borderWidth:2
	}
});

export default styles;