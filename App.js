import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import AlbumDetail from './src/components/AlbumDetail';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
// type State = {};
// class Foo extends React.Component<Props, State> {
//   [...]
// } But this ignores annotations

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
});
