/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text 
          adjustsFontSizeToFit
          numberOfLines={2}
          style={styles.welcome}
        >
           {"First Line\nSecond line with some more text"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    maxWidth: 250,

    // the second line is visible when text wrapper has explicit height
    // but i'd love to have an automatic height defined by the text itself
    // flex: 1,
    // height: 200,
  },
});
