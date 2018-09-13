import { StyleSheet,Dimensions } from 'react-native';
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
	},
	questionContainer:{
		height: metrics.screenWidth / 2.5,
		backgroundColor: colors.input,
		borderRadius: metrics.baseRadius,
		alignItems:'center',
		justifyContent:'center',
	},
	questionText:{
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
		color: colors.text
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
	}
});

export default styles;