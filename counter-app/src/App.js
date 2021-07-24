import React from 'react';
import Navbar from '../src/components/navbar'
import Counters from '../src/components/counters';
import './App.css';



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
   </React.Fragment>
  );
}

export default App;
