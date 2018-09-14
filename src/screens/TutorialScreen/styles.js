import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: colors.secundary,
		paddingVertical: 30,
		justifyContent:'center',
	},
	wrapper:{
		flex:1,
		backgroundColor: '#FFF',
		alignItems:'center',
		justifyContent:'center'
	},
});

export default styles;