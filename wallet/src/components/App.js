import React from 'react';
import Wallet from './Wallet';
import Bitcoin from './Bitcoin';

const App = () => {
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

export default App;