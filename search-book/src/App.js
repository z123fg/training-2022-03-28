import './App.css';
import Home from './components/Home/Home';
import Wishlist from './components/Wishlist/Wishlist';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToWishlist, loadWishlist } from './redux/slices/wishlistSlice';


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

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadWishlist());
  },[])
  return (
    <div className="App">
      <Home />
      <Wishlist/>
    </div>
  );
}

export default App;
