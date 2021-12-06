import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import AppNavigation from './router';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="default" />
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
