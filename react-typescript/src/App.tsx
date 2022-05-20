import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from '@mui/material';
//babel/webpack: transpile es6~es5, jsx~es5, tsx/ts~es5
//tsc: transpile and typechecking

//cra: tranpile using babel: tsx/ts~es5, jsx~es5, es6~es5, scss/sass ~ css
function App() {
  return (
    <div className="App">
      <Button variant='contained' color="error">Submit</Button>
    </div>
  );
}

export default App;
