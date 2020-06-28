import React from 'react';
import './App.scss';
import NavHeader from './components/NavHeader/NavHeader';
import CardContainer from './components/CardContainer/CardContainer'

function App() {
  return (
    <div className="App">
      <NavHeader />
      <CardContainer />
    </div>
  );
}

export default App;
