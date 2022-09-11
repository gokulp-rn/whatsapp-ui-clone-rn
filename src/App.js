/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import AppContainer from './components/navigation/AppContainer';
import theme from './styles/theme';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' backgroundColor={theme.colors.teal_green_dark} />
        <AppContainer />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
