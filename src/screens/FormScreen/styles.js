import { StyleSheet } from 'react-native';
import { colors,metrics,fonts } from '../../styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		backgroundColor: '#FFF',
		padding: metrics.doubleBaseMargin
	},
	input:{
		padding:metrics.baseMargin,
		borderWidth:1,
		borderColor:colors.primary,
		borderRadius:metrics.baseRadius,
		backgroundColor:colors.secundary,
		fontSize:fonts.input,
		fontWeight:'bold',
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