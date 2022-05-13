import './App.css';
import Home from './components/Home/Home';
import Wishlist from './components/Wishlist/Wishlist';
import { createContext, useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToWishlist, loadWishlist } from './redux/slices/wishlistSlice';
import Header from './components/Home/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MyRoutes from './router-demo/MyRoutes';
import MyRoute from './router-demo/MyRoute';
import MyBrowserRouter from './router-demo/MyBrowserRouter';

/* 
    pagination:
        100 results totally, display 10 results per page;
        1st page: start index = 0(~9), max results = 10,
        2nd page: start index = 10(~19),max results = 10,
*/
// in url we have path parameter, query parameter
//flux: architecture pattern, design pattern(MVC,MV-VM,FLUX);
//redux: global state management tool/library, it is implementation of flux for react
//decoupling: separate the responsibility, centralize the logic

//for react functional component, people usually use redux-react and redux tookit to configure the store, instead of using redux core

//redux thunk: middleware for side effect, part of redux, like a plugin of redux

//context api: global state management, built-in api of react

/* 
  flux: action dispatcher store(s) view

  redux: action reducer store view

  difference: flux originally support multiple store, and has dispatcher, while redux originally only has one store
*/


export const CounterContext = createContext();

const counterReudcer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      break;
  }
}

export const increment = () => ({ type: "increment" });
export const decrement = () => ({ type: "decrement" });

/* 
location:
  protocal: http, https
  host/hostname: google.com
  pathname: /docs/en/v6/getting-started/installation
  hash: #12344342
  origin:protocal + host
  reload:refresh the page
  assign/replace: go to the url you provide, assign create a new history entry

history:
  pushState/replaceState:
  forward/back: navigating the history

https:// reactrouter.com  /docs/en/v6/getting-started/installation
*/

let test = 1;
test = 2;
function App() {
  const dispatch = useDispatch();
  const [counter, dispatchCtx] = useReducer(counterReudcer, 0);
  const [isHome, setIsHome] = useState(true);

  const [toggle,setToggle] = useState(false);

  const forceUpdate = () => {
    setToggle(prev=>!prev)
  }

  //const [counter, setCounter] = useState(0)

  useEffect(() => {
    dispatch(loadWishlist());
  }, []);

  
 

  /* const incrementCounter = () => {
    setCounter(prev=>prev+1);
  } */
  //useSelector, useDispatch
  return (

    <CounterContext.Provider value={{ counter, dispatchCtx }}>
      <BrowserRouter>
        <div className="App">
          <Header setIsHome={setIsHome} forceUpdate={forceUpdate}/>
          <Routes>
            <Route  toggle={toggle} path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CounterContext.Provider>



  );
}

export default App;
