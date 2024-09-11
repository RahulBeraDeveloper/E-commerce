

// // export default Login;
import React, { useState, } from 'react';
import { auth, googleAuthProvider } from '../../firebase'; // Firebase configuration
import { signInWithEmailAndPassword,signInWithPopup  } from 'firebase/auth'; // Firebase modular import
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; // Redux import

import './Login.css'; // Ensure you import your custom CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {Link} from 'react-router-dom';

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} = useSelector((state)=>({...state}))
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();
  const navigate = useNavigate(); // Use the navigate hook

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     // Attempt to sign in with email and password
  //     const result = await signInWithEmailAndPassword(auth, email, password);
  //     const { user } = result;
  //     const idTokenResult = await user.getIdTokenResult();

  //     // Dispatch the user information to Redux store
  //     dispatch({
  //       type: 'LOGGED_IN_USER',
  //       payload: {
  //         email: user.email,
  //         token: idTokenResult.token,
  //       },
  //     });

  //     // Redirect user to homepage
  //     navigate("/"); // Use navigate instead of history.push
  //   } catch (error) {
  //     setLoading(false);
  //     console.error('Login error:', error.code, error.message); // Log detailed error
  //     toast.error(error.message); // Show error toast to user
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password); // Use modular import
      const { user } = result;
      console.log("Logged in user:", user);
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });

      navigate("/"); // Use navigate instead of history.push
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider); // Use signInWithPopup from modular import
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      navigate("/"); // Use navigate instead of history.push
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };




  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          type="email" 
          className="form-control" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email"
          autoFocus 
        />
      </div>
      <br />
      <div>
        <input 
          type="password" 
          className="form-control" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your password"
        />
      </div>
      <br />
      <Button
        onClick={handleSubmit}
        type="submit"
        className="mb-3 btn-block btn-primary rounded-pill"
        size="lg"
      
        disabled={!email || password.length < 6}  // Ensure password is at least 6 characters long
      >
        <i class="bi bi-envelope"></i> Login with Email/Password
      </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ?(<h4 className="text-danger">Loading</h4>):<h4>Login</h4>}
          {loginForm()}

          <Button
        onClick={googleLogin}
        type="submit"
        className="mb-3 btn-block btn-danger rounded-pill"
        size="lg"
        style={{backgroundColor:'#C63C51'}}
        >
         <i class="bi bi-google"></i> Login with google
      </Button>
      <Link to ="/forgot/password" className ="d-block text-end text-danger">forgot Password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
