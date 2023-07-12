import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Update = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: '',
    username: '',
    password: '',
    userType: '',
    avatar: '',
  });
  const [config] = useState({
    headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get('http://localhost:4000/usersingle/' + id, config)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [avatar, setAvatar] = useState(null);
  const changehandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };
  const btnUpdate = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:4000/updateOne/' + id, User, config)
      .then((response) => {
        console.log('res' + response);
        alert('update successfully');
        navigate('/getUser2');
      })
      .catch((error) => {
        console.log('error' + error);
      });
  };
  return (
    <>
      <h1>im register 2</h1>
      <div className="registration form">
        <div className="container">
          <header></header>
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

            <button type="submit" className="button" onClick={btnUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
