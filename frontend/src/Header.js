import React from "react";

const Header = (props) => {
  const { name, id } = props;
  return (
    <>
      <h1>Im header. My name is {name}</h1>
      <h2>My id is {id}</h2>
    </>
  );
};

export default Header;
