/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import WebView from 'react-native-webview';

const App: () => React$Node = () => {
  return (
    <WebView
      source={{uri: 'https://rental.belvilla.com/dashboard'}}
    />
  );
};

export default App;
