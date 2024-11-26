import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './Pages/home';
import Why from './Pages/why';
import Services from './Pages/services';
import Contact from './Pages/home#contact';



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/why-us" element={<Why/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )

}

export default App;

