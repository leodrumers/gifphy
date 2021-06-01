import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(c => c = [inputValue, ...c]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange} />
    </ form>
  )
}

AddCategory.prototype = {
  setCategories : PropTypes.func.isRequired
}
