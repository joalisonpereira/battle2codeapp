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
		justifyContent:'center',
		flexDirection:'row'
	},
	title:{
		fontSize:fonts.title,
		fontWeight:'400',
		color:colors.text,
		elevation:3
	},
	titleMiddle:{
		fontSize:fonts.title,
		fontWeight:'bold',
		color:colors.primary,
		transform: [{ 
			rotate : '8deg' 
		}],
	},
	form:{
		marginTop:10
	},
	logoContainer:{
		alignSelf:'center'
	},
	logo:{
		width:45,
		height:45
	},
	button:{
	   	width: '100%',
	   	marginLeft: 0
	}
});

export default styles;