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
		borderRadius: metrics.baseRadius
	},
	info:{
		marginVertical : 40,
		alignItems:'center',
		justifyContent:'center',
	},
	infoText:{
		fontSize: 25,
		color: colors.text,
		fontWeight:'bold'
	},
	image:{
		aspectRatio: 1
	}
});

export default styles;
