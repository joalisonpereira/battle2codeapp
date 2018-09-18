import { createStackNavigator } from 'react-navigation';

import TutorialScreen from '../screens/TutorialScreen';
import FormScreen from '../screens/FormScreen';
import BattleScreen from '../screens/BattleScreen';
import WinnerScreen from '../screens/WinnerScreen';
import RankingScreen from '../screens/RankingScreen';

const Router = createStackNavigator({
	Tutorial : TutorialScreen,
	Form : FormScreen,
	Battle : BattleScreen,
	Winner : WinnerScreen,
	Ranking : RankingScreen,
},{
	navigationOptions : {
		header : null
	}
});

export default Router;





