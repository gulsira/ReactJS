import React from 'react';

import BitcoinDashboard from './components/bitcoinDashboard/BitcoinDashboard';
import Countdown from './components/countdown/Countdown';



function App() {
  return (
    <div style={{ minHeight: '100vh' }} className="container-fluid p-3 mb-2 bg-secondary text-white" >
      <Countdown />
      <hr/>
      <BitcoinDashboard />
    </div>
  );
}

export default App;
