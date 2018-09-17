import { StyleSheet } from 'react-native';
import { colors,metrics } from '../../styles';

const styles = StyleSheet.create({
	container:{
		padding: metrics.doubleBaseMargin,
	},
	infoContainer:{
		flexDirection: 'row',
		alignItems:'center',
		justifyContent: 'space-between',
		marginBottom: metrics.baseMargin
	},
	infoText:{
		fontSize: 17,
		fontWeight: 'bold',
		color: colors.text
	},
	positive:{
		color: colors.success
	},
	negative:{
		color: colors.error
	},
	questionContainer:{
		height: metrics.screenWidth / 2.5,
		backgroundColor: colors.input,
		borderRadius: metrics.baseRadius,
		alignItems:'center',
		justifyContent:'center',
		elevation:3
	},
	questionText:{
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
		color: colors.secundary
	},
	buttonContainer:{
		flexDirection:'row',
		justifyContent:'space-around',
		marginTop: metrics.doubleBaseMargin
	},
	rotate:{
		transform: [{ 
			rotate : '180deg' 
		}],
		paddingBottom: 35,
	},
	disable:{
		opacity:0
	}
});

export default styles;