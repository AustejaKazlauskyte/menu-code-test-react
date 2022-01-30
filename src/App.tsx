import React from 'react';
import { render } from 'react-dom';
import Main from './containers/Main';

function App() {
  return (
    <Main />
  );
}

render(<App />, document.getElementById('root'));
