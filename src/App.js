import './App.css';
import {Route, Routes} from 'react-router';
import ResponsiveAppBar from './Component/NavBar'

import About from './Component/About';
import Menu from './Component/Menu';
import Orders from './Component/Orders';
import Home from './Component/Home/Home';


function App() {
  return (
   <>
   <ResponsiveAppBar/>
   <Routes>
   <Route path= '/'element={<Home/>}/>
    <Route path= '/Home'element={<Home/>}/>
    <Route path= 'Menu'element={<Menu/>}/>
    <Route path= 'Orders'element={<Orders/>}/>
    <Route path= 'About'element={<About/>}/>
   </Routes>
   
   </>
  );
}

export default App;

