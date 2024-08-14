import React from 'react';
import Home from './components/Home';
import PropsDrilling from './components/props_drilling/PropsDrilling';
import UseMemo from './components/hooks/UseMemo';
import Function from './components/code_swati/Function'
import Counter from './components/code_swati/Lifecycle';

function App(props) {
  return (
    <div>
      {/* <Home/>
      <PropsDrilling/>
      <UseMemo/> */}
      {/* <Function/> */}
      <Counter/>
    </div>
  );
}

export default App;