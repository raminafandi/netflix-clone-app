import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';

const screens = {
  Home: {
    screen: Home
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: {
      headerShown: false
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'black'
    }
  }
});
export default createAppContainer(HomeStack);
