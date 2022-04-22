import logo from './logo.svg';
import './App.css';
import React from 'react';


/* 

  functional component
  class based component

  1. state management
  2. life cycles: constructor, componentDidMount, componentDidUpdate, componentWillUnmount render
  3. event binding: synthetic event(wrapper of native event), this keyword
  4. props: passed from parent

  onclick, onClick,, 

  this:
  arrow function: 
  function keyword:
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Adam"
    }
    /*  const h1El = document.querySelector("h1");
     console.log("h1",h1El); */

    //this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() { //it should be invoked after the mount of the component(initial rendering of the component)
    //const h1El = document.querySelector("h1");
    //console.log("h1", h1El);
  }

  /* handleClick(){
    console.log("click", this) //undefined
  } */

  handleClick = () => {
    //console.log("click",this)

    this.setState({
      name:"John"
    })
  }

  /* handleClick = function(){
    console.log("click", this);//undefined
  } */

  render() {
    const h1El = document.querySelector("h1");
    console.log("h1",h1El);
    return (
      <>
        <h1 id="app">Hello {this.props.name}</h1>
        <button onClick={this.handleClick}>button</button>
      </>) //syntax sugar for React.createElement(), virtual node(virtual)
  }
}

export default App;
