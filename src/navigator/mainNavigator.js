import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps149699Navigator from '../features/Maps149699/navigator';
import Settings149680Navigator from '../features/Settings149680/navigator';
import Settings149645Navigator from '../features/Settings149645/navigator';
import ArticleList149640Navigator from '../features/ArticleList149640/navigator';
import Maps149627Navigator from '../features/Maps149627/navigator';
import ArticleList149622Navigator from '../features/ArticleList149622/navigator';
import Maps149609Navigator from '../features/Maps149609/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps149699: { screen: Maps149699Navigator },
Settings149680: { screen: Settings149680Navigator },
Settings149645: { screen: Settings149645Navigator },
ArticleList149640: { screen: ArticleList149640Navigator },
Maps149627: { screen: Maps149627Navigator },
ArticleList149622: { screen: ArticleList149622Navigator },
Maps149609: { screen: Maps149609Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
