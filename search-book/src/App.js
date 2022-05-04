import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Home/Searchbox/Searchbox';
import Home from './components/Home/Home';
import Wishlist from './components/Wishlist/Wishlist';
import { useEffect, useState } from 'react';


/* 
    pagination:
        100 results totally, display 10 results per page;
        1st page: start index = 0(~9), max results = 10,
        2nd page: start index = 10(~19),max results = 10,
*/
// in url we have path parameter, query parameter


const url = "https://www.googleapis.com/books/v1/volumes?q=bookname&startIndex=0&maxResults=20"
function App() {
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")||"[]"));

  useEffect(()=>{
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  },[wishlist]);

  const handleAddWishlist = (bookInfo) => {
    setWishlist(prev=>{
      const bookMap = {}; //hashMap {[id]: book}
      const nextWishlist = [bookInfo, ...prev];
      nextWishlist.forEach(book=>{
        bookMap[book.id] = book;
      });
      return Object.values(bookMap);
    });
    
  }

  const handleDeleteWishlist = (id) => {
    setWishlist(prev=>{
      return prev.filter(item=>item.id !== id)
    });
  }
  return (
    <div className="App">
      <Home handleAddWishlist={handleAddWishlist}/>
      <Wishlist handleDeleteWishlist={handleDeleteWishlist} wishlist={wishlist}/>
    </div>
  );
}

export default App;
