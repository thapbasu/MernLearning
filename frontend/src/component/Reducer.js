import React, { useReducer, useState } from 'react';
const initialState = 0;
const reducer = (state, action) => {
  if (state.action == 'INCREMENT') {
    return state + 1;
  } else if (state.action === 'DECREMENT') {
    return state - 1;
  }
  return state;
};
const Reducer = () => {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  return (
    <div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <p>{value}</p>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        +
      </button>
      <p>{value}</p>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        -
      </button>
    </div>
  );
};

export default Reducer;
