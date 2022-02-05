import React, {Component} from 'react';


import AlbumsList from './components/albumscomponet/albums-component';

import './App.css';

import  Searchbox  from './components/search-box/search-box';
 
class App extends Component {


  render() {

    

    return (

      <div className = 'App'>
        
        <Searchbox />
        <AlbumsList />
        
        

      </div>


      );

  };

  
}


export default App;
