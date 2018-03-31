// Import a library to help create a component
import React from 'react';
import {Text, AppRegistry} from 'react-native';
//create a component
const App = () =>{
    return (
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
  );
}

//render it to device
AppRegistry.registerComponent('albums', ()=>App);
