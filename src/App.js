import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Components/Home';
import {Routes, Route} from 'react-router-dom'
import Service from './Components/Service';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import './App.css';


function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/service' element={<Service/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route path='*' element={<Home/>}/>
</Routes>
<Footer/>
    </>
  );
}

export default App;
