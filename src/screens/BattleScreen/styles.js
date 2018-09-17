import { StyleSheet } from 'react-native';
import { colors,metrics } from '../../styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column-reverse',
		justifyContent:'space-around',
		backgroundColor: colors.secundary,
	},
	divider:{
		borderBottomColor: '#DCDCDC',
		borderBottomWidth: 5,
	}
});

export default styles;