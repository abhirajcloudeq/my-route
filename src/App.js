// import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;