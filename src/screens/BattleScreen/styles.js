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
		borderBottomWidth: 2,
	},
	timer:{
		fontWeight:'bold',
		fontSize:80,
		color:'white'
	},
	timerWrapper:{
		alignItems:'center',
		justifyContent:'center'
	}
});

export default styles;