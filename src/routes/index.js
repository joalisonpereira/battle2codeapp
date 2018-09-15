import { createStackNavigator } from 'react-navigation';

import TutorialScreen from '../screens/TutorialScreen';
import FormScreen from '../screens/FormScreen';
import BattleScreen from '../screens/BattleScreen';
import WinnerScreen from '../screens/WinnerScreen';
import RankingScreen from '../screens/RankingScreen';

const Router = createStackNavigator({
	Ranking : RankingScreen,
	Winner : WinnerScreen,
	Tutorial : TutorialScreen,
	Form : FormScreen,
	Battle : BattleScreen,
},{
	navigationOptions : {
		header : null
	}
});

export default Router;





