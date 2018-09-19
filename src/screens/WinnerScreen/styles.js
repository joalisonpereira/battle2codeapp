import { StyleSheet } from 'react-native';

import { colors,metrics } from '../../styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: colors.secundary,
		paddingTop:50,
		paddingBottom:25,
		paddingHorizontal:15
	},
	wrapper:{
		flex:1,
		backgroundColor: '#FFF',
		alignItems:'center',
		justifyContent:'center',
		borderRadius: metrics.baseRadius,
		elevation:5,
		paddingHorizontal: metrics.baseMargin
	},
	info:{
		marginBottom : 20,
		alignItems:'center',
		justifyContent:'center',
	},
	infoText:{
		fontSize: 22,
		color: colors.secundary,
		fontWeight:'bold',
		textAlign:'center'
	},
	subInfo:{
		width:'60%',
		marginTop: 15
	},
	subInfoText:{
		textAlign:'center',
		fontSize:13,
		fontWeight:'bold',
		color : colors.secundary
	},
	image:{
		marginTop:20,
		marginBottom:25,
		aspectRatio: 1
	},
	centerRender:{
		alignItems:'center',
		justifyContent:'center',
	},
	buttonContainer:{
		width:'100%'
	},
	logo:{
		width: 50,
		height: 50
	}
});

export default styles;
