import React, { useState } from 'react';

const useReducer = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <p>0</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default useReducer;
