import './App.css';
import { Route, Routes } from 'react-router';
import ResponsiveAppBar from './Component/NavBar'

import About from './Component/About/About';
import Menu from './Component/Menu';
import Orders from './Component/Order/Orders';
import Home from './Component/Home/Home';
import { connect } from "react-redux"
import Homepage from './Component/homepage/homepage';
import Login from './Component/login/login';
import Register from './Component/register/register';


function App() {
  return (
    <>
      <Homepage />
      <Login/>
      <Register />

      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='Menu' element={<Menu />} />
        <Route path='Orders' element={<Orders />} />
        <Route path='About' element={<About />} />
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

