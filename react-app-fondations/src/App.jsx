
import './App.css';
import Home from './pages/home';
import Nav from "./components/nav"
import Services from './pages/services';
import Contacts from './pages/contacts';

import Blogs from './pages/blogs';
import About from './pages/about';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {

//   const Students =[
//     {
//             name:'petel',
//             age:'12 yrs',
//             location:'Kgl',
//             size:'2M'
//     } ,
//     {
//         name:'patric',
//         age:'15 yrs',
//         location:'Msz',
//         size:'1.3M'
// } ,
// {
//     name:'John',
//     age:'20 yrs',
//     location:'Kabuga',
//     size:'3'
// } ,
// ]
  return (
    <div className="App">
    
     

        
       
       <Router>
        <Nav/>
        <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/about' element={<About name="Umurimo Company" location="Kigali Rwanda" contacts={250}/>}/>

       <Route path='/contacts' element={<Contacts/>}/>
       <Route path='/services' element={<Services/>}/>
       < Route path='/blog' element={<Blogs/>}/>








        </Routes>

       </Router>

 
    </div>
  );
}

export default App;
