import React from 'react';
import Home from './components/Home';
import PropsDrilling from './components/props_drilling/PropsDrilling';
import UseMemo from './components/hooks/UseMemo';

function App(props) {
  return (
    <div>
      <Home/>
      <PropsDrilling/>
      <UseMemo/>
    </div>
  );
}

export default App;