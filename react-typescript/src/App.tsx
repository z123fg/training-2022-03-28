import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from '@mui/material';
import MyButton from './components/MyButton/MyButton';
//babel/webpack: transpile es6~es5, jsx~es5, tsx/ts~es5
//tsc: transpile and typechecking

//cra: tranpile using babel: tsx/ts~es5, jsx~es5, es6~es5, scss/sass ~ css
function App() {
  return (
    <div className="App">
      <MyButton variant='outlined' size="small" color="primary">SUBMIT</MyButton>
    </div>
  );
}

export default App;
