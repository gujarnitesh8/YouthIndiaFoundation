/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import {AppRegistry} from 'react-native';
import App from './src/App'
import { name as appName } from './app.json';
import React, { Component, } from 'react';
import { AppRegistry, StyleSheet, View, StatusBar, Text, Dimensions, Platform, } from 'react-native';
import Color from './src/Config/Color.js';
const { width, height } = Dimensions.get('window');
let screenHeight = width < height ? height : width
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

class DarkTheme extends Component {
  constructor() {
    super()
    console.disableYellowBox = true;
  }
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor={Color.BACKGROUND} barStyle="light-content" />
        <App style={styles.content} />
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? (screenHeight === 812 ? 44 : 20) : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
AppRegistry.registerComponent(appName, () => DarkTheme);