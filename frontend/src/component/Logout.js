import React, { useState } from 'react';
import axios from 'axios';
const Logout = () => {
  const [config] = useState({
    headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  const logout2 = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:4000/logout' + config)
      .then((response) => {
        console.log('res' + response);
        alert('logout successfully');
      })
      .catch((error) => {
        console.log('error: ' + error);
      });
  };
  return (
    <>
      <button onClick={logout2}>logout</button>
    </>
  );
};

export default Logout;
