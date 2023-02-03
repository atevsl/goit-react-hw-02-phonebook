import React from 'react';
const Filter = props => {
  return (
    <label>
      <span>Find contacts by name:</span>
      <input name="filter" onChange={props.onInputHendler}></input>
    </label>
  );
};
export default Filter;
