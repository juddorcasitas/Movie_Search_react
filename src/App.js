import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SearchBar extends Component{
  render(){
    return(
      <div className="search">
      <h1> Search Bar test </h1>
        <form action="">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i className={["fa", "fa-search"].join(' ')}></i></button>
        </form>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link rel="stylesheet" href=
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </header>
        <body>
        <SearchBar />
        </body>
      </div>
    );
  }
}

export default App;
