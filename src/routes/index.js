import { createStackNavigator } from 'react-navigation';

import TutorialScreen from '../screens/TutorialScreen';
import FormScreen from '../screens/FormScreen';
import BattleScreen from '../screens/BattleScreen';

const Router = createStackNavigator({
	Battle : BattleScreen,
	Tutorial : TutorialScreen,
	Form : FormScreen,
},{
	navigationOptions : {
		header : null
	}
});

export default Router;





