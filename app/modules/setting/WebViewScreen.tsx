import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { DummyData } from '../../constant';
import { ApplicationStyle } from '../../theme';

const WebViewScreen = (): ReactElement => {
  return (
    <WebView
      source={{ uri: DummyData.googleUrl }}
      style={ApplicationStyle.screen}
    />
  );
};

export default WebViewScreen;
