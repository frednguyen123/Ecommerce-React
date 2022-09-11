import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
      <div className="App">
          <Nav />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/books' element={<Books books={books}/>} />
            <Route path='/books/:id' element={<BookInfo books={books}/>} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
