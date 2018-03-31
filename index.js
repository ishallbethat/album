// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import AlbumDetail from './src/components/AlbumDetail';
//create a component
const App = ()=>(
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
);

//render it to device
AppRegistry.registerComponent('albums', ()=>App);
