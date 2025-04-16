
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Home from './pages/home';
import  About from './pages/about';
import Contacts from './pages/contacts';
import Nav from './components/nav';
import BackendMessage from './components/backendMessage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

  
function App() {
const [poster,setMessage]=useState('');
useEffect(()=>{
axios.get('http://localhost:5000/api/v2/data')
.then((response)=>{
  setMessage(response.data[4].Title);
})
.catch((err)=>{
  console.error("Erroe fetching data:", err );
})
},[]);
  return (
    <div className="App">

      <Router>
        <Nav/>
        <Routes>
          <Route path='/message' element={<BackendMessage poster={poster} />}></Route>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contacts/>} />
        </Routes>
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
