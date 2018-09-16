import { createNavigationReducer } from 'react-navigation-redux-helpers';

import Router from '../../routes';

const navReducer = createNavigationReducer(Router);

export default navReducer;