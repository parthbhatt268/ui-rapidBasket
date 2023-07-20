import './App.css';
import { Route, Routes } from 'react-router';
import About from './Component/About/About';
import Menu2 from './Component/Menu/Menu2';
import Menu from './Component/Menu/Menu';
import Orders from './Component/Order/Orders';
import Home from './Component/Home/Home';
import Login from './Component/login/login';
import Register from './Component/register/register';
import Profile from './Component/Profile/profile';
import OrderHistory from './Component/OrderHistory/orderHistory';
import NotFound from './Component/Shared/NotFound';
import ResponsiveAppBar from './Component/Shared/NavBar/navbar';
import { useLocation } from 'react-router-dom';
import Loading from './Component/Shared/Loading/Loading';
import DialogBox from './Component/Shared/DialogBox/DialogBox'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessScreen from './Component/Order/SuccessScreen';
import ErrorScreen from './Component/Order/CancelScreen';

function App() {
  let location = useLocation();

  return (
    <>
      <Loading />
      {(!location.pathname.includes("Login") && !location.pathname.includes("Register") && location.pathname !== "/") && <ResponsiveAppBar />}
      <Routes>
        <Route exact path='Login' element={<Login />} />
        <Route exact path='Register' element={<Register />} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='Home' element={<Home />} />
        {/* <Route exact path='Menu' element={<Menu2 />} /> */}
        <Route exact path='Menu' element={<Menu />} />
        <Route exact path='Orders' element={<Orders />} />
        <Route exact path='About' element={<About />} />
        <Route exact path='Profile' element={<Profile />} />
        <Route exact path='Order%20History' element={<OrderHistory />} />
        <Route exact path='success' element={<SuccessScreen />} />
        <Route exact path='error' element={<ErrorScreen />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
