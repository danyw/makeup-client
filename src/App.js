import logo from './logo.svg';
import './App.css';
import AppBar from './Components/Header/AppBar';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import APIProducts from './Components/API-Products/API-Products';
import MyFav from './Components/My-Fav/My-Fav';
import About from './Components/About/About';
import {Route, Routes} from 'react-router'



function App() {
  return (
  <div className="App">
    
    
      < AppBar />
      
        <Routes>
          <Route path="/" element={<APIProducts />} />
          <Route path="myFavorites" element={<MyFav />} />
          <Route path="about" element={<About />} />
        </Routes>
        
    
    
    </div>
  );
}

export default App;
