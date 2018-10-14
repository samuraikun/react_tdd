import React, { Component } from 'react';
import Wallet from './Wallet';
import Bitcoin from './Bitcoin';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Wallet Check</h2>
        <hr />
        <Wallet />
        <hr />
        <Bitcoin />
      </div>
    );
  }
}

export default App;