import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/NotFound';
import Header from './components/nav/Header'
import RegisterComplete from './pages/auth/RegisterComplete';


const App = () => {
  return (

    <>
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path ="/register/complete" element={<RegisterComplete/>   }/>
      </Routes>
    </>

  );
};

export default App;



