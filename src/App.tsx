import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button';

function App() {
    return <div>
        <span>Finally no TS errors, phew</span>
        <Button title={'test title'} onClick={() => console.log('I was clicked')}>Click click</Button>
    </div>
}

render(<App />, document.getElementById('root'));
