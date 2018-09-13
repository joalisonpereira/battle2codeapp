import { StyleSheet } from 'react-native';
import { colors,metrics } from '../../styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'space-around',
		backgroundColor: colors.secundary,
		padding: metrics.doubleBaseMargin
	},
});

export default styles;