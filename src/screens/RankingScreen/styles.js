import { StyleSheet } from 'react-native';
import { colors,fonts,metrics } from '../../styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: colors.secundary,
		paddingTop:50,
		paddingBottom:25,
		paddingHorizontal:15,
	},
	wrapper:{
		flex:1,
		backgroundColor: '#FFF',
		paddingHorizontal: metrics.baseMargin,
		borderRadius: metrics.baseRadius,
		elevation:5
	},
	centerLogo:{
		alignItems:'center',
		justifyContent:'center'
	},
	logo:{
		width:50,
		height:50
	},
	titleContainer:{
		alignItems:'center',
		marginTop: metrics.doubleBaseMargin
	},
	titleText:{
		color: colors.text,
		fontSize: fonts.title,
		fontWeight: 'bold'
	},
});

export default styles;