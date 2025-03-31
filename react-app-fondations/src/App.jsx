
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Nav from './components/nav';
import Contacts from './pages/contacts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <div className="App">
    <Router>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
