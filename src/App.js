import './App.css';
import { Route, Routes } from 'react-router';
import About from './Component/About/About';
import Menu2 from './Component/Menu/Menu2';
import Orders from './Component/Order/Orders';
import Home from './Component/Home/Home';
import { connect } from "react-redux"
import Login from './Component/login/login';
import Register from './Component/register/register';
import Profile from './Component/Profile/profile';
import OrderHistory from './Component/OrderHistory/orderHistory';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='Menu2' element={<Menu2 />} />
        <Route path='Orders' element={<Orders />} />
        <Route path='About' element={<About />} />
        <Route path='Profile' element={<Profile />} />
        <Route path='About' element={<OrderHistory />} />
      </Routes>

    </>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

