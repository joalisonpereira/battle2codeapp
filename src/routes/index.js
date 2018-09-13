import { createStackNavigator } from 'react-navigation';

import TutorialScreen from '../screens/TutorialScreen';
import FormScreen from '../screens/FormScreen';
import BattleScreen from '../screens/BattleScreen';

const Router = createStackNavigator({
	Form : FormScreen,
	Battle : BattleScreen,
	Tutorial : TutorialScreen,
},{
	navigationOptions : {
		header : null
	}
});

export default Router;





