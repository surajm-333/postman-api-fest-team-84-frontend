import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/navbar';
import LandingPage from './components/Home/LandingPage';
import HomePage from './components/Home/HomePage';
import BookImgCard from './components/Home/BookImgCard';
import Books from './components/Home/books';
import BookCard from './components/Home/BookCard';

function App() {
  return (
    <div className="App">
       <NavBar/>
       {/* <LandingPage/> */}
       {/* <HomePage/> */}
       {/* <BookImgCard/> */}
       <Books genera={"Sci-fi"}/>
    </div>
  );
}

export default App;
