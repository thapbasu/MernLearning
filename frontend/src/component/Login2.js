import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login2 = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState({ email: '', password: '' });
  const changeHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };
  const btnlogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/login', User)
      .then((response) => {
        console.log('login', response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('usertype', response.data.userType);
        alert('login successful');
        navigate('/getUser2');
      })
      .catch((error) => {
        console.log(error);
        alert('login failed');
      });
  };

  return (
    <>
      <h1>Login 2</h1>
      <div className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>Login</header>
          <form action="#">
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              name="email"
              defaultValue={User.email}
              onChange={changeHandle}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              defaultValue={User.password}
              onChange={changeHandle}
              required
            />
            <a href="#">Forgot password?</a>
            <button
              type="button"
              className="button"
              value="Login"
              onClick={btnlogin}
            >
              Login
            </button>
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account?
              <Link to="/Register2">
                <label htmlFor="check">Signup</label>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login2;
