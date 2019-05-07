import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScreen from "~/screens/Main";

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: () => ({
        gestureResponseDistance: {
          horizontal: -1,
          vertical: -1
        }
      })
    }
  },
  {
    initialRouteName: "Main",
    swipeEnabled: false
  }
);

export default createAppContainer(AppNavigator);
