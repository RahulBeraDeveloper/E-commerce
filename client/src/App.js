import React,{useEffect} from 'react';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/NotFound';
import Header from './components/nav/Header'
import RegisterComplete from './pages/auth/RegisterComplete';
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import ForgotPassword from './pages/auth/ForgotPassword';
const App = () => {

  const dispatch = useDispatch()
  // useEffect(()=>{
  //   const unsubscribe = auth.onAuthStateChanged(async (user)=>{
  //     if(user){
  //       console.log('user')
  //       const idTokenResult = await user.getIdTokenResult()
  //       dispatch({
  //         type: 'LOGGED_IN_USER',
  //         payload:{
  //           // token: idTokenResult.token,
  //           email:user.email,
  //           token:idTokenResult
  //         }
  //       })

  //     }
  //   })

  //   //cleanup
  //   return ()=>unsubscribe();
  // },[])



    // to check firebase auth state
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const idTokenResult = await user.getIdTokenResult();
          console.log("user", user);
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              email: user.email,
              token: idTokenResult.token,
            },
          });
        }
      });
      // cleanup
      return () => unsubscribe();
    }, []);
  
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
        <Route path ="/forgot/password" element={<ForgotPassword/>   }/>
      </Routes>
    </>

  );
};

export default App;



