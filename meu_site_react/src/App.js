import './App.css';
import React from 'react';
import './components/helloReact';
import helloReact from './components/helloReact';

function App() {
  return (
    <div className="App">

      {/* Importando componente */}
      <helloReact />

    </div>
  );
}

export default App;