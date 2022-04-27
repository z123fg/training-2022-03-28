import logo from './logo.svg';
import './App.css';
import React from 'react';
import Test from './components/Test';


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


  life-cycle:
    mounting:
      constructor;     
      static getDerivedStateFromProps(uncommon)
      render;
      componentDidMount;

    updating(state change, props change, forceUpdate):
      static getDerivedStateFromProps(uncommon)
      shouldComponentUpdate(sometimes)
      render
      static getSnapshotBeforeUpdate(uncommon)
      componentDidUpdate


    unmounting
      componentWillUnmount


  immutability:

*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Adam",
      toggle:true
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

  componentDidUpdate(){
    /* if(){                 //never trigger rerendering in updating phase unconditionally
      this.forceUpdate();
    this.setState({...this.state});
    }
     */
  }

  handleClick =  () => {
    //console.log("click",this)

    /* this.setState({
      toggle:!this.state.toggle
    });

    this.setState({
      toggle:this.state.toggle
    }); */

    //this.state.toggle = false;//wrong, mutable

    //console.log("before 1st setstate", this.state.toggle);//true

    this.setState(prev=>{
      console.log("prev1",prev.toggle)//true
      return {...prev, toggle:!prev.toggle}
    });

    //console.log("after 1st setState",this.state.toggle);//true

    this.setState(prev=>{
      console.log("prev2", prev.toggle)
      return {...prev, toggle:!prev.toggle}
    });
    //console.log("after 2nd setState",this.state.toggle);//true


   /*  this.setState({
      toggle:!this.state.toggle
    }) */

    /* this.setState(prevState=>{
      return {
        ...prevState,
        toggle: !prevState.toggle
      }
    }) */

    //this.state.toggle = !this.state.toggle;
  }
  /* handleClick = function(){
    console.log("click", this);//undefined
  } */
  
  render() {//rerender, render(setState, props, forceUpdate)
    //const h1El = document.querySelector("h1");
    /* console.log("h1",h1El); */
    console.log("render",this);
    return (
      <>
        <h1 id="app">Hello {this.props.name}</h1>
        <div>{this.state.toggle?<Test toggle={this.state.toggle}/>:null}</div>
       
        <button onClick={this.handleClick}>button</button>
      </>
      ) //syntax sugar for React.createElement(), virtual node(virtual)
  }
}

const arr = [1,2,3];

arr.forEach((ele)=>{ //declarative
  console.log(ele);
})


for(let i = 0; i < arr.length;i++){//imperative
  console.log(arr[i]);
}

export default App;
