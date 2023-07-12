import React, { useState } from 'react';
import axios from 'axios';
const Register2 = () => {
  const [User, setUser] = useState({
    email: '',
    username: '',
    password: '',
    userType: '',
    avatar: '',
  });
  const [avatar, setAvatar] = useState(null);
  const changehandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };
  const btnlogin = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', avatar);
    data.append('username', User.username);
    data.append('email', User.email);
    data.append('password', User.password);
    data.append('userType', User.userType);

    axios
      .post('http://localhost:4000/register', data)
      .then((response) => {
        console.log('login', response.data);
        alert('register successful');
      })
      .catch((error) => {
        console.log(error);
        alert('register failed');
      });
  };
  const filehandle = (e) => {
    setAvatar(e.target.files[0]);
  };
  return (
    <>
      <h1>im register 2</h1>
      <div className="registration form">
        <div className="container">
          <header>Signup</header>
          <form
            action="action_page.php"
            method="post"
            enctype="multipart/form-data"
          >
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              defaultValue={User.username}
              onChange={changehandle}
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              defaultValue={User.email}
              onChange={changehandle}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              defaultValue={User.password}
              onChange={changehandle}
              required
            />
            <input
              type="text"
              placeholder="Enter UserType"
              name="userType"
              defaultValue={User.userType}
              onChange={changehandle}
              required
            />
            <input
              type="file"
              placeholder="Enter image"
              name="avatar"
              defaultValue={User.avatar}
              onChange={filehandle}
              required
            />
            <button type="submit" className="button" onClick={btnlogin}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register2;
