import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';

export default function AppContainer() {
  return (
    <NavigationContainer>
        <AppStack />
    </NavigationContainer>
  );
}