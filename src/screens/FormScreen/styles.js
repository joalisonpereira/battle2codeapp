import { StyleSheet } from 'react-native';
import { colors,metrics,fonts } from '../../styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		backgroundColor: colors.secundary,
		padding: metrics.doubleBaseMargin
	},
	titleContainer:{
		alignSelf:'center',
		justifyContent:'center'
	},
	title:{
		fontSize:fonts.title,
		fontWeight:'bold',
		color:colors.text
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