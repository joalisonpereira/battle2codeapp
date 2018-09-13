import { StyleSheet,Dimensions } from 'react-native';
import { colors,metrics } from '../../styles';

const styles = StyleSheet.create({
	questionContainer:{
		width:'100%',
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
	},
	buttonContainer:{
		flexDirection:'row',
		justifyContent:'space-around',
		marginTop: metrics.doubleBaseMargin
	},
	rotate:{
		transform: [{ 
			rotate : '180deg' 
		}]
	}
});

export default styles;