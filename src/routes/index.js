import { createStackNavigator } from 'react-navigation';

import TutorialScreen from '../screens/TutorialScreen';
import FormScreen from '../screens/FormScreen';

const Router = createStackNavigator({
	Form : FormScreen,
	Tutorial : TutorialScreen,
},{
	navigationOptions : {
		header : null
	}
});

export default Router;





