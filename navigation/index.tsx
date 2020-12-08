import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import AuthScreen from '../screens/AuthScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, AuthStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

interface Props {
  authenticated: boolean;

}

const checkAuth = (props: Props) => {
  return props.authenticated === false ? <AuthNavigator /> : <RootNavigator />;
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation: React.FC<Props> = (props) => {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      {checkAuth(props)}
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Root" component={BottomTabNavigator} />
      <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </RootStack.Navigator>
  );
}

const AuthStack = createStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      <AuthStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </AuthStack.Navigator>
  );
}
export default Navigation;