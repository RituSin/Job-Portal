import logo from './logo.svg';
import React, {useEffect} from "react"
import './App.css';
import Landing from './pages/landing/Landing';
import Signup from './pages/landing/Signup';
import Login from './pages/landing/Login';
import ResetPassword from './pages/landing/ResetPassword';
import ForgotPassword from './pages/landing/ForgotPassword';
import Home from './pages/home/Home';
import { useSelector } from 'react-redux';
import Header from './pages/header/Header';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);;
  // 
  return (
  <div className="container">
     <Header/>

      <main>
          {isAuth ?
            <Home/>:
            <Landing/>
          }
      </main>
  </div>
  );
}

export default App;
