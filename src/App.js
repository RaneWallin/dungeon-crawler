import React, { Component } from 'react';
import DungeonCrawler from './components/dungeon_crawler'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DungeonCrawler />
      </div>
    );
  }
}

export default App;
