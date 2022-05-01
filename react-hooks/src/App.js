import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useLayoutEffect, useState } from "react"
import Child from './components/Child';
import Todo from './components/TodoList/Todo';
//stateless component
//hooks
//state, props, life cycle method

/* const obj = {name:"adam"};
const {name} = obj;

const arr = [1,2,3];
const [,first,second] = arr; */




// function App() {
//   const [username, setUsername] = useState("adam");
//   const [userAge, setUserAge] = useState(18);
//   const [userInfo, setUserInfo] = useState({name:"adam",age:18});
//   const [inputValue, setInputValue] = useState("");
//   const [toggle, setToggle] = useState(true);

//   //componentDidMount, componentDidUpdate, componentWillUnmount
//   useEffect(()=>{
//     console.log("callback is invoked", userInfo.age ,document.getElementById("age"));//19, 19
//   },[userInfo]);//1. callback function 2. dep array


//  /*  useLayoutEffect(()=>{
//     console.log("useLayoutEffect callback is invoked", userInfo.age ,JSON.stringify(document.getElementById("age").innerText));//19 19
//   },[userInfo]) */

//   const handleGetOld = () => {
//     userInfo.age++;
//     setUserInfo({...userInfo})
//   }

//   const handleChange = (e) => {
//     setInputValue(prev=>{
//       return e.target.value
//     });
//   }

//   const handleToggle = () => {
//     setToggle(!toggle)
//   }
//   return (
//     <div className="App">
//       <p>{userInfo.name}</p>
//       <p id="age">{userInfo.age}</p>
//       <input value={inputValue} onChange={handleChange}/>
//       <button onClick={handleGetOld}>get old</button>
//       <button onClick={handleToggle}>toggle</button>
//       {toggle&&<Child data={userInfo}/>}
//     </div>
//   );
// }


/* class App extends Component {
  state={name:"adam", age:18}

  handleGetOld = () => {
    this.setState(this.state);
  }

  componentDidUpdate(){
    console.log("didUpdate")
  }

  render(){
    return (
      <div className="App">
      <p>{this.state.name}</p>
      <p>{this.state.age}</p>
      <button onClick={this.handleGetOld}>get old</button>
    </div>
    )
  }
} */

function App() {
  return (
    <div className='app'>
     <Todo/>
    </div>
  );
}

export default App;
