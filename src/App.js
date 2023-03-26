import './App.css';
import { Route, Routes } from 'react-router';
import About from './Component/About/About';
import Menu2 from './Component/Menu/Menu2';
import Orders from './Component/Order/Orders';
import Home from './Component/Home/Home';
import Login from './Component/login/login';
import Register from './Component/register/register';
import Profile from './Component/Profile/profile';
import OrderHistory from './Component/OrderHistory/orderHistory';
import NotFound from './Component/Shared/NotFound';
import ResponsiveAppBar from './Component/Shared/NavBar/navbar';
import HomePage from './Component/HomePage/HomePage';
import { useLocation } from 'react-router-dom';
import Loading from './Component/Shared/Loading/Loading';


function App() {
  let location = useLocation();

  return (
    <>
    <Loading/>
    {(!location.pathname.includes("Login") && !location.pathname.includes("Register") && location.pathname !== "/") && <ResponsiveAppBar/>}
      <Routes>
        <Route exact path='Login' element={<Login />} />
        <Route exact path='Register' element={<Register />} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='Home' element={<Home/>} />
        <Route exact path='Menu' element={<Menu2 />} />
        <Route exact path='Orders' element={<Orders />} />
        <Route exact path='About' element={<About />} />
        <Route exact path='Profile' element={<Profile />} />
        <Route exact path='Order%20History' element={<OrderHistory />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>

    </>
  );
}

export default App
