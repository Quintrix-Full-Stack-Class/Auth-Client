import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import './App.css';
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register'
import CryptoComponent from "./crypto/crypto";
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { loadUser } from './actions/auth';
import { Provider } from 'react-redux';
import Verfication from './components/auth/Verfication';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/Routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
  <Router>
    <Nav />
    <Routes>
      {/*<Route exact path="/crypto" element={<CryptoComponent/>}/>*/}
    <Route path = '/' element={<Landing/>} />
    <Route path = "register" element={<Register/>} />
     <Route path = "login" element={<Login/>} />
     <Route path = "verification" element={<Verfication/>} />
     <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
   
    </Routes>
    <Footer />
  </Router>
  </Provider>
  );
}

export default App;
