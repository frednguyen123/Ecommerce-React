import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);


    // const dupeItem = cart.find(item => +item.id === +book.id);
    // if (dupeItem){
    //   // dupeItem.quantity += 1;
    //   setCart(cart.map(item => {
    //     if (item.id === dupeItem.id){
    //       return {
    //         ...item,
    //         quantity: item.quantity + 1
    //       }
    //     }
    //     else {
    //       return item;
    //     }
    //   }))
    // }
    // else {
    //   setCart([...cart, {...book, quantity: 1}])
    // }
    // // console.log(dupeItem)
    // // setCart([...cart, {...book, quantity: 1}]);
  }

  useEffect(() =>{
    console.log(cart);
  }, [cart])

  return (
      <div className="App">
          <Nav />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/books' element={<Books books={books}/>} />
            <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart}/>} />
            <Route path='/cart' element={<Cart books={books}/>} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
