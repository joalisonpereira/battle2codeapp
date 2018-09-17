import { StyleSheet } from 'react-native';
import { colors,metrics } from '../../styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: colors.secundary,
		justifyContent:'center',
		paddingTop:50,
		paddingBottom:25,
		paddingHorizontal:15,
	},
	wrapper:{
		flex:1,
		backgroundColor: '#FFF',
		alignItems:'center',
		justifyContent:'center',
		borderRadius: metrics.baseRadius,
		elevation:5
	},
});

export default styles;