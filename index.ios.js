// IOS

// Import a library to help create component
import React from 'react';
import { AppRegistry, Text } from 'react-native';
// Create component
const App = () => (
    <Text>Some Text</Text>
  );
// Render it to the device
AppRegistry.registerComponent('albums', () => App);