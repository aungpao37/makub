import React, { Component } from 'react';
import Pagenav from './pagenav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h5>CHAKON BORIBOON</h5>
        <Pagenav></Pagenav>
        </header>
      </div>
    );
  }
}

export default App;
