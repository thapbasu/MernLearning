import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const User2 = () => {
  const [User, SetUser] = useState([]);
  const [config] = useState({
    headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  const deleteUser = (userid) => {
    axios
      .delete('http://localhost:4000/deleteuser/' + userid, config)
      .then((res) => {
        console.log('response', res);
        alert('delete successfull');
      })
      .catch((error) => {
        console.log(error);
        alert('delete failed');
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:4000/userall', config)
      .then((response) => {
        SetUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [deleteUser]);
  return (
    <>
      {User.map((curElem) => {
        return (
          <>
            <div className="container2">
              <div className="username"> {curElem.username} </div>
              <div className="password"> {curElem.password} </div>
              <div className="userType"> {curElem.userType} </div>
              <div className="email"> {curElem.email} </div>
              <div className="testing">
                <img src={'http://localhost:4000/' + curElem.avatar} />
                <button
                  className="delete"
                  onClick={deleteUser.bind(this, curElem._id)}
                >
                  Delete
                </button>
              </div>
              <Link to={'/updateuser/' + curElem._id}>Update</Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default User2;
