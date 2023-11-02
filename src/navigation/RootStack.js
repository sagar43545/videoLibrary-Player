//================================ React Native Imported Files ======================================//

import React from 'react';
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//================================ Local Imported Files ======================================//

import {LANDING_SCREEN, SELECT_SCREEN} from '../constants/navigators';
import LandingScreen from '../screens/LandingScreen';
import SubmitScreen from '../screens/SubmitScreen';

const RootStack = createStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={LANDING_SCREEN}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <RootStack.Screen name={LANDING_SCREEN} component={LandingScreen} />
        <RootStack.Screen name={SELECT_SCREEN} component={SubmitScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
