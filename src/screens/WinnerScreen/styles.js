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
		elevation:5
	},
	info:{
		marginTop : 30,
		marginBottom : 20,
		alignItems:'center',
		justifyContent:'center',
	},
	infoText:{
		fontSize: 19,
		color: colors.text,
		fontWeight:'bold'
	},
	subInfo:{
		width:'60%',
		marginTop: 15
	},
	subInfoText:{
		textAlign:'center',
		fontSize:12.5,
		fontWeight:'bold',
		color : colors.text
	},
	image:{
		aspectRatio: 1
	},
	centerRender:{
		alignItems:'center',
		justifyContent:'center',
	}
});

export default styles;
