import { StyleSheet } from 'react-native';
import { colors,metrics } from '../../styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		backgroundColor: colors.terciary,
		padding: metrics.doubleBaseMargin
	},
	titleContainer:{
		alignSelf:'center',
		justifyContent:'center'
	},
	title:{
		fontSize:50,
		fontWeight:'bold',
		color:colors.primary
	},
	form:{
		marginTop:10
	},
	logoContainer:{
		alignSelf:'center'
	},
	logo:{
		width:35,
		height:35
	},
	button:{
	   	width: '100%',
	   	marginLeft: 0,
	}
});

export default styles;