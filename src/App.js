import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Signup from './components/Loginpage/signup';
import Login from './components/Loginpage/login';
import NavBar from './components/Navbar/navbar';
import LandingPage from './components/Home/LandingPage';
import HomePage from './components/Home/HomePage';
import BookImgCard from './components/Home/BookImgCard';
import Books from './components/Home/books';
import BookCard from './components/Home/BookCard';
import UploadBook from './components/UploadForm/UploadBook';

function App() {
  return (
    <>
      <NavBar />
      {/* <UploadBook/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
