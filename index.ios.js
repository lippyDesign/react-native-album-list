// IOS

// Import a library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// import components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// Create component
const App = () => (
    <View style={{ flex: 1 }} >
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);