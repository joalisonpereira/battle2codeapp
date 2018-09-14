import { createStackNavigator } from 'react-navigation';

import TutorialScreen from '../screens/TutorialScreen';
import FormScreen from '../screens/FormScreen';
import BattleScreen from '../screens/BattleScreen';
import WinnerScreen from '../screens/WinnerScreen';

const Router = createStackNavigator({
	Form : FormScreen,
	Tutorial : TutorialScreen,
	Battle : BattleScreen,
	Winner : WinnerScreen,
},{
	navigationOptions : {
		header : null
	}
});

export default Router;





